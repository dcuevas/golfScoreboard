import { Pipe, PipeTransform } from '@angular/core';
import { Match } from '../../shared/match';
import { Team } from '../../shared/team';
import { ScoreService } from '../score/score.service';

@Pipe({name: 'totalMatchPoints'})
export class TotalMatchPointsPipe implements PipeTransform {
  constructor(private scoreService: ScoreService) {}

  private getTotalPointsTeam1(matches) {
    if (matches) {
      return this.scoreService.getTotalPoint(matches, Team.team1);
    }
  }

  private getTotalPointsTeam2(matches) {
    if (matches) {
      return this.scoreService.getTotalPoint(matches, Team.team2);
    }
  }

  transform(value: Match[], team: Team) {
    if (team === Team.team1) {
      return this.getTotalPointsTeam1(value);
    } else {
      return this.getTotalPointsTeam2(value);
    }
  }
}
