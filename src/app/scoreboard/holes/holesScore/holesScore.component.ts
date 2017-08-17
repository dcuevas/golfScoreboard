import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Score} from '../../../shared/match';
import {Team} from '../../../shared/team';
import * as _ from 'lodash';
import {CompetitionsService} from '../../../competitions/competitions.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-holes-score',
  templateUrl: './holesScore.component.html',
  styleUrls: ['./holesScore.component.scss']
})
export class HolesScoreComponent implements OnInit {
  private static halvedOption = 2;
  @Input() team1Score: Score[];
  @Input() team2Score: Score[];
  @Input() matchNumber: number;
  team1ScoreDirty: Score[];
  team2ScoreDirty: Score[];
  holeSelected;
  result;
  competitionId;

  constructor(public activeModal: NgbActiveModal, private competitionService: CompetitionsService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.team1ScoreDirty = _.cloneDeep(this.team1Score);
    this.team2ScoreDirty = _.cloneDeep(this.team2Score);

    this.route.root.params.subscribe( (params: any) => {
      this.competitionId = params.name;
      console.log('Competition settled ', params);
    });
  }


  updateResult() {
    this.result = this.selectedHoleResult();
    console.log(this.holeSelected);
  }

  updateMatch() {
    if (this.result === Team.team1) {
      console.log('Gana red', this.result, this.holeSelected);
      this.setHolePoints(1, 0);
    } else if (this.result === Team.team2) {
      console.log('Gana blue', this.result, this.holeSelected);
      this.setHolePoints(0, 1);
    } else {
      this.setHolePoints(0.5, 0.5);
      console.log('Halved', this.result, this.holeSelected);
    }

    this.setHolePlayed(this.holeSelected - 1);
  }

  selectedHoleResult() {
    return this.getHoleResult(this.holeSelected - 1);
  }

  getHoleResult(number) {
    if (this.team1ScoreDirty[number].points === 0.5) {
      return HolesScoreComponent.halvedOption;
    } else if (this.team1ScoreDirty[number].points === 1) {
      return Team.team1;
    } else if (this.team2ScoreDirty[number].points === 1) {
      return Team.team2;
    } else {
      return null;
    }
  }

  saveResults() {
    this.competitionService.saveScores('-Kk6rPWtX0UzHtlRTQzf', this.matchNumber, this.team1ScoreDirty, this.team2ScoreDirty);
    this.activeModal.close();
  }

  private setHolePoints(team1Points, team2Points) {
    this.team1ScoreDirty[this.holeSelected - 1].points = team1Points;
    this.team2ScoreDirty[this.holeSelected - 1].points = team2Points;
  }

  private setHolePlayed(number) {
    this.team1ScoreDirty[number].played = true;
    this.team2ScoreDirty[number].played = true;
  }

}
