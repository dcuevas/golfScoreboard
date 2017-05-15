import { Component, OnInit } from '@angular/core';
import {CompetitionsService} from './competitions.service';
import {FirebaseListObservable} from 'angularfire2/database';
import {Competition} from 'app/shared/competition';
import {Router} from '@angular/router';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.scss']
})
export class CompetitionsComponent implements OnInit {
  competitions$: FirebaseListObservable<any[]>;

  constructor(private competitionService: CompetitionsService, private router: Router) {

  }

  ngOnInit() {
    this.competitions$ = this.competitionService.getCompetitions();
  }

  createCompetition() {
    this.router.navigate(['/competition']);
  }

  deleteCompetition() {
    console.log('delete competition');
  }

  openCompetitionScoreboard(name) {
    this.router.navigate([`/scoreboard/${name}`]);
    // this.competitionService.getCompetitionsByName(name);
  }

}
