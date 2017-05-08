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


@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    CompetitionsComponent,
    ScoreboardComponent,
    NavigationComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    Routing,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
