import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {
  maxNumberOfMatches = 10;
  numberOfMatches = 0;

  constructor() {

  }

  ngOnInit() {
  }

}
