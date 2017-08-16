import {Component, Input, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {Score} from '../../shared/match';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HolesScoreComponent} from './holesScore/holesScore.component';

@Component({
  selector: 'app-holes',
  templateUrl: './holes.component.html',
  styleUrls: ['./holes.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HolesComponent {
  @Input() team1Score: Score[];
  @Input() team2Score: Score[];
  @Input() matchNumber: number;
  private TEAM1_COLOR = '#d20004';
  private TEAM2_COLOR = '#0132a7';
  private HALVED_COLOR = '#b8b8b8';

  constructor(private modalService: NgbModal) {}

  addScore() {
    const modalRef = this.modalService.open(HolesScoreComponent);
    modalRef.componentInstance.team1Score = this.team1Score;
    modalRef.componentInstance.team2Score = this.team2Score;
    modalRef.componentInstance.matchNumber = this.matchNumber;
  }

  getHoleColor(index) {
    if (!this.team1Score[index].played || (this.team1Score[index].points === this.team2Score[index].points)) {
      return this.HALVED_COLOR;
    } else if (this.team1Score[index].points > this.team2Score[index].points) {
      return this.TEAM1_COLOR;
    } else {
      return this.TEAM2_COLOR;
    }
  }

  alreadyPlayed(index) {
    if (!this.team1Score[index].played) {
      return true;
    } else {
      return false;
    }
  }
}
