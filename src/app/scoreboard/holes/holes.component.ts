import {Component, Input} from '@angular/core';
import {Score} from '../../shared/match';

@Component({
  selector: 'app-holes',
  templateUrl: './holes.component.html',
  styleUrls: ['./holes.component.scss']
})
export class HolesComponent {
  @Input() team1Score: Score[];
  @Input() team2Score: Score[];
  private TEAM1_COLOR = '#d20004';
  private TEAM2_COLOR = '#0132a7';
  private HALVED_COLOR = '#b8b8b8';

  addScore() {

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
