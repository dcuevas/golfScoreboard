import { CompetitionsComponent } from './competitions/competitions.component';
import { RouterModule } from '@angular/router';
import { CompetitionComponent } from './competition/competition.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

const routes = [
  { path: '', component: CompetitionsComponent },
  { path: 'competition', component: CompetitionComponent },
  { path: 'scoreboard/:id', component: ScoreboardComponent },
];

export default RouterModule.forRoot(routes);
