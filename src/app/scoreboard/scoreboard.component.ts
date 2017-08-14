import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';
import {CompetitionsService} from "../competitions/competitions.service";
import {Competition} from "../shared/competition";
import {FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  name: any;
  competition$: FirebaseListObservable<any[]>;

  constructor(private route: ActivatedRoute, private competitionService: CompetitionsService) {

  }

  ngOnInit() {
    this.route.params.subscribe( (params: any) => {
      console.log(params.name);
      this.name = params.name;
      this.competition$ = this.competitionService.getCompetitionsByName(params.name);
    });
  }

}
