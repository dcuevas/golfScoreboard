import {Component, Input} from '@angular/core';
import * as _ from 'lodash';
import {Match, Score} from '../../shared/match';
import {CompetitionsService} from '../../competitions/competitions.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent {
  @Input() numberOfMatches;
  @Input() competitionInfo;

  constructor(private competitionService: CompetitionsService, private router: Router) {}

  onSubmit(formValue) {
    const newCompetition = this.buildCompetition(formValue);

    this.competitionService.saveCompetition(newCompetition).then((savedCompetition) => this.router.navigate(['/competitions']));
  }

  private buildCompetition(formValue) {
    const competition = Object.assign({}, this.competitionInfo);

    competition.matches = this.buildMatches(formValue);

    return competition;
  }

  private buildMatches(formValue) {
    const matches: Match[] = new Array();

    _.forOwn(formValue, (match) => {
      matches.push({
        players1: [ { name: match.team1.player1Name, surname: match.team1.player1Surname },
                    { name: match.team1.player2Name, surname: match.team1.player2Surname } ],
        players2: [ { name: match.team2.player1Name, surname: match.team2.player1Surname },
                    { name: match.team2.player2Name, surname: match.team2.player2Surname } ],
        score1: this.buildScores(),
        score2: this.buildScores(),
      });
    });

    return matches;
  }

  private buildScores() {
    const scores: Score[] = new Array(18);

    for (let i = 0; i < scores.length; i++) {
      scores[i] = {
        hole: i + 1,
        played: false,
        points: 0
      };
    }

    return scores;
  }

}

