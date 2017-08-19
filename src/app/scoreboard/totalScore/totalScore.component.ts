import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Competition} from '../../shared/competition';

@Component({
  selector: 'app-total-score',
  templateUrl: './totalScore.component.html',
  styleUrls: ['./totalScore.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class TotalScoreComponent {
  @Input() competition: Competition;
}
