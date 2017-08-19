import {Component, Input} from '@angular/core';
import {Match} from '../../shared/match';
import {Team} from '../../shared/team';
import {ScoreService} from './score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {
  @Input() match: Match;
  @Input() number: number;
  @Input() competitionId: any;

  constructor(private scoreService: ScoreService) {}

  isMatchHalved() {
    return this.scoreService.isMatchHalved(this.match);
  }

  isTeam1Winning() {
    return this.scoreService.isTeam1Winning(this.match);
  }

  isTeam2Winning() {
    return this.scoreService.isTeam2Winning(this.match);
  }

  isMatchFinished() {
    return this.scoreService.isMatchFinished(this.match);
  }

  totalPoints() {
    if (this.match) {
      return Math.abs(this.scoreService.getMatchPoints(this.match, Team.team1) - this.scoreService.getMatchPoints(this.match, Team.team2));
    } else {
      return 0;
    }
  }

  holesPendingToBePlayed() {
    return this.scoreService.holesPendingToBePlayed(this.match);
  }
}
