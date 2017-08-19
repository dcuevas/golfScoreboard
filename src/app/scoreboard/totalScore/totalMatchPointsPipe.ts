import { Pipe, PipeTransform } from '@angular/core';
import { Match } from '../../shared/match';
import { Team } from '../../shared/team';
import { ScoreService } from '../score/score.service';
import * as _ from 'lodash';

@Pipe({name: 'totalMatchPoints'})
export class TotalMatchPointsPipe implements PipeTransform {
  static halfChar = '\u00BD';
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
    let unformattedPoints;

    if (team === Team.team1) {
      unformattedPoints = this.getTotalPointsTeam1(value);
    } else {
      unformattedPoints = this.getTotalPointsTeam2(value);
    }
    const integerPortion = Math.floor(unformattedPoints);
    const decimalPortion = unformattedPoints % 1;

    if (integerPortion > 0 && decimalPortion > 0) {
      return `${integerPortion}<span class="decimal">${TotalMatchPointsPipe.halfChar}</span>`;
    } else if (_.isNumber(integerPortion) && integerPortion > 0) {
      return integerPortion;
    } else if (decimalPortion > 0) {
      return `<span class="decimal only-decimal">${TotalMatchPointsPipe.halfChar}</span>`;
    } else {
      return 0;
    }
  }
}
