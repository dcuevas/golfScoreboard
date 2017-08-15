import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';
import {CompetitionsService} from '../competitions/competitions.service';
import {FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  competition$: FirebaseObjectObservable<any>;

  constructor(private route: ActivatedRoute, private competitionService: CompetitionsService) {

  }

  ngOnInit() {
    this.route.params.subscribe( (params: any) => {
      this.competition$ = this.competitionService.getCompetition(params.name);
    });
  }

}
