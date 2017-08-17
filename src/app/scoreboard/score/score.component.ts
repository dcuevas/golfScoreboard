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
    if (this.match) {
      return this.scoreService.getMatchPoints(this.match, Team.team1) === this.scoreService.getMatchPoints(this.match, Team.team2);
    } else {
      return true;
    }
  }

  isTeam1Winning() {
    if (this.match) {
      return this.scoreService.getMatchPoints(this.match, Team.team1) > this.scoreService.getMatchPoints(this.match, Team.team2);
    } else {
      return false;
    }
  }

  isTeam2Winning() {
    return (!this.isMatchHalved() && !this.isTeam1Winning());
  }

  totalPoints() {
    if (this.match) {
      return Math.abs(this.scoreService.getMatchPoints(this.match, Team.team1) - this.scoreService.getMatchPoints(this.match, Team.team2));
    } else {
      return 0;
    }
  }
}
