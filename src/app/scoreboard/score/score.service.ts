import { Injectable } from '@angular/core';
import { Match } from '../../shared/match';
import { Team } from '../../shared/team';

@Injectable()
export class ScoreService {
  getMatchPoints(match: Match, team: Team): number {
    let totalPoints = 0;
    match[`score${team + 1}`].forEach((score) => totalPoints += score.points);
    return totalPoints;
  }

  getTotalPoint(matches: Match[], team: Team): number {
    let totalPoints = 0;
    matches.forEach(match => totalPoints += this.getMatchPoints(match, team));
    return totalPoints;
  }
}
