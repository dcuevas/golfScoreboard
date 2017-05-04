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


@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    CompetitionsComponent,
    ScoreboardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
