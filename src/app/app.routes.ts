import { CompetitionsComponent } from './competitions/competitions.component';
import { RouterModule } from '@angular/router';
import { CompetitionComponent } from './competition/competition.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { AuthComponent } from './auth/auth.component';

const routes = [
  { path: '', component: AuthComponent },
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'competition', component: CompetitionComponent },
  { path: 'scoreboard/:name', component: ScoreboardComponent },
];
export const Routing = RouterModule.forRoot(routes);
