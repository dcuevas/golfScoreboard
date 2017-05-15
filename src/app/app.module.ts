import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routing } from './app.routes';

import { AppComponent } from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from './environments/environment';
import { AuthComponent } from './auth/auth.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from './auth/auth.service';
import { CompetitionsService } from './competitions/competitions.service';
import { RangePipe } from './shared/range.pipe';
import { MatchesComponent } from './competition/matches/matches.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    CompetitionsComponent,
    ScoreboardComponent,
    NavigationComponent,
    AuthComponent,
    MatchesComponent,
    RangePipe
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    Routing,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AuthService,
    CompetitionsService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
