import {Component, Input} from '@angular/core';
import {Competition} from '../../shared/competition';

@Component({
  selector: 'app-total-score',
  templateUrl: './totalScore.component.html',
  styleUrls: ['./totalScore.component.scss']
})

export class TotalScoreComponent {
  @Input() competition: Competition;
}
