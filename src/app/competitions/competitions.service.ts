import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Competition } from 'app/shared/competition';

@Injectable()
export class CompetitionsService {
  competitions: FirebaseListObservable<Competition[]> = this.db.list('/competitions');

  constructor(private db: AngularFireDatabase) {}

  getCompetitions(): FirebaseListObservable<Competition[]> {
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

  saveCompetition(competition: Competition) {
    return this.competitions.push(competition);
  }
}


