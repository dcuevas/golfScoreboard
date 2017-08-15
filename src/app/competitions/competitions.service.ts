import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Competition } from 'app/shared/competition';

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
}


