import { Injectable } from '@angular/core';
import {Match, Score} from '../../shared/match';
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
    matches.forEach(match => {
      if (this.isMatchFinished(match)) {
        if (team === Team.team1 && this.isTeam1Winning(match)) {
          totalPoints++;
        } else if (team === Team.team2 && this.isTeam2Winning(match)) {
          totalPoints++;
        } else if (this.isMatchHalved(match)) {
          totalPoints += 0.5;
        }
      }
    });
    return totalPoints;
  }

  isMatchHalved(match: Match) {
    if (match) {
      return this.getMatchPoints(match, Team.team1) === this.getMatchPoints(match, Team.team2);
    } else {
      return true;
    }
  }

  isTeam1Winning(match: Match) {
    if (match) {
      return this.getMatchPoints(match, Team.team1) > this.getMatchPoints(match, Team.team2);
    } else {
      return false;
    }
  }

  isTeam2Winning(match: Match) {
    return (!this.isMatchHalved(match) && !this.isTeam1Winning(match));
  }

  isMatchFinished(match: Match) {
    let isFinished = false;

    if (match.score1.every(score => score.played)) {
      isFinished = true;
    } else if (this.isMatchResultHigherThanHolesRemaining(match)) {
      isFinished = true;
    }

    return isFinished;
  }

  holesPendingToBePlayed(match: Match) {
    return match.score1.filter((hole) => !hole.played).length;
  }

  lastHolePlayed(match: Match) {
    return match.score1.findIndex((score) => !score.played);
  }

  private isMatchResultHigherThanHolesRemaining(match: Match) {
    return Math.abs(this.getMatchPoints(match, Team.team1) - this.getMatchPoints(match, Team.team2)) >
      this.holesPendingToBePlayed(match);
  }
}
