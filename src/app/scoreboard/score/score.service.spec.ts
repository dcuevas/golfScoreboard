import {ScoreService} from './score.service';
import {Team} from "../../shared/team";

describe('ScoreService', () => {
  let service: ScoreService;
  const match = {
    players1: [ { name: 'Manolo', surname: 'Luna'}, { name: 'Manolo', surname: 'Luna'}, ],
    players2: [ { name: 'Manolo', surname: 'Luna'}, { name: 'Manolo', surname: 'Luna'}, ],
    score1: [
      { hole: 1, played: false, points: 0 },
      { hole: 2, played: false, points: 0 },
      { hole: 3, played: false, points: 0 },
      { hole: 4, played: false, points: 0 },
    ],
    score2: [
      { hole: 1, played: false, points: 0 },
      { hole: 2, played: false, points: 0 },
      { hole: 3, played: false, points: 0 },
      { hole: 4, played: false, points: 0 },
    ],
  };

  const setPlayed = (scores, played) => {
    scores.forEach((score) => score.played = played);
  };

  const setMatchScoresPlayed = (played) => {
    setPlayed(match.score1, played);
    setPlayed(match.score2, played);
  };

  beforeEach(() => {
    service = new ScoreService();
  });

  describe('isMatchFinished', () => {
    it('should return false when result is lower than holes remaining to play', () => {
      expect(service.isMatchFinished(match)).toBeFalsy();
    });

    it('should return true when result is higher than holes remaining to play', () => {
      match.score1[0].played = true;
      match.score1[0].points = 1;
      match.score1[1].played = true;
      match.score1[1].points = 1;
      match.score1[2].played = true;
      match.score1[2].points = 1;

      expect(service.isMatchFinished(match)).toBeTruthy();
    });

    it('should return true when all holes have been played', () => {
      setMatchScoresPlayed(true);

      expect(service.isMatchFinished(match)).toBeTruthy();
    });
  });

  describe('lastHolePlayed', () => {
    it('should return 0 when no hole have been played', () => {
      expect(service.lastHolePlayed(match)).toBe(0);
    });

    it('should return the last hole played', () => {
      match.score1[0].played = true;
      match.score1[0].points = 1;
      match.score1[1].played = true;
      match.score1[1].points = 1;

      expect(service.lastHolePlayed(match)).toBe(2);
    });
  });

});
