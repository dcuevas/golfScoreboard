import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Competition } from 'app/shared/competition';
import 'rxjs/add/operator/first';

@Injectable()
export class CompetitionsService {
  competitions: FirebaseListObservable<any[]> = this.db.list('/competitions');

  constructor(private db: AngularFireDatabase) {}

  getCompetitions(): FirebaseListObservable<any[]> {
    return this.competitions;
  }

  getCompetitionsByName(name) {
    return this.db.list('/competitions', {
      query: {
        orderByChild: 'name',
        equalTo: name
      }
    });
  }

  getCompetition(id) {
    return this.db.object(`/competitions/${id}`);
  }

  saveCompetition(competition: Competition) {
    return this.competitions.push(competition);
  }

  saveScores(competitionId, matchNumber, score1, score2) {
    const competition = this.getCompetition(competitionId);
    competition.first().subscribe(value => {
      value.matches[matchNumber].score1 = score1;
      value.matches[matchNumber].score2 = score2;
      competition.update({ matches: value.matches });
    });
  }

  reomveCompetition(competitionId) {
    const competition = this.getCompetition(competitionId);
    return competition.remove();
  }
}


