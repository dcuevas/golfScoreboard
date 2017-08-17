import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Score} from '../../../shared/match';
import {Team} from '../../../shared/team';
import * as _ from 'lodash';
import {CompetitionsService} from '../../../competitions/competitions.service';

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
  @Input() competitionId: any;
  team1ScoreDirty: Score[];
  team2ScoreDirty: Score[];
  holeSelected;
  result;

  constructor(public activeModal: NgbActiveModal, private competitionService: CompetitionsService) {}

  ngOnInit(): void {
    this.team1ScoreDirty = _.cloneDeep(this.team1Score);
    this.team2ScoreDirty = _.cloneDeep(this.team2Score);
  }

  updateResult() {
    this.result = this.selectedHoleResult();
  }

  updateMatch() {
    if (this.result === Team.team1) {
      this.setHolePoints(1, 0);
    } else if (this.result === Team.team2) {
      this.setHolePoints(0, 1);
    } else {
      this.setHolePoints(0.5, 0.5);
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
    this.competitionService.saveScores(this.competitionId, this.matchNumber, this.team1ScoreDirty, this.team2ScoreDirty);
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
