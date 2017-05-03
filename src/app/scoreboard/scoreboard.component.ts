import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  id: any;

  constructor(private route: ActivatedRoute) {
    this.id = route.params.map( (params: any) => params.id);
  }

  ngOnInit() {
  }

}
