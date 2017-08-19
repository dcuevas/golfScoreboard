import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {MatchesComponent} from './matches.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RangePipe} from '../../shared/range.pipe';
import {CompetitionsService} from '../../competitions/competitions.service';
import {Router} from '@angular/router';

describe('MatchesComponent', () => {
  let component: MatchesComponent;
  let fixture: ComponentFixture<MatchesComponent>;
  const mockCompetitionService = {
    saveCompetition: () => new Promise((resolve, reject) => resolve('')),
  };
  const mockRouter = {
    navigate: true,
  };

  const formValue = {
    match1: {
      team1: {
        player1: 'Pipa',
        player2: 'Pepe'
      },
      team2: {
        player1: 'Sergio',
        player2: 'Salva'}
    },
    match2: {
      team1: {
        player1: 'Pepe',
        player2: 'Manuel'
      },
      team2: {
        player1: 'Luis',
        player2: 'Miguel'}
    }
  };

  const expectedCompetition = {
    name: 'Conejada',
    team1: 'Team 1',
    team2: 'Team 2',
    matches: [
      {
        players1: ['Pipa', 'Pepe'],
        players2: ['Sergio', 'Salva'],
        score: [
          { hole: 1, played: false, points: 0},
          { hole: 2, played: false, points: 0},
          { hole: 3, played: false, points: 0},
          { hole: 4, played: false, points: 0},
          { hole: 5, played: false, points: 0},
          { hole: 6, played: false, points: 0},
          { hole: 7, played: false, points: 0},
          { hole: 8, played: false, points: 0},
          { hole: 9, played: false, points: 0},
          { hole: 10, played: false, points: 0},
          { hole: 11, played: false, points: 0},
          { hole: 12, played: false, points: 0},
          { hole: 13, played: false, points: 0},
          { hole: 14, played: false, points: 0},
          { hole: 15, played: false, points: 0},
          { hole: 16, played: false, points: 0},
          { hole: 17, played: false, points: 0},
          { hole: 18, played: false, points: 0},
        ]
      },
      {
        players1: ['Pepe', 'Manuel'],
        players2: ['Luis', 'Miguel'],
        score: [
          { hole: 1, played: false, points: 0},
          { hole: 2, played: false, points: 0},
          { hole: 3, played: false, points: 0},
          { hole: 4, played: false, points: 0},
          { hole: 5, played: false, points: 0},
          { hole: 6, played: false, points: 0},
          { hole: 7, played: false, points: 0},
          { hole: 8, played: false, points: 0},
          { hole: 9, played: false, points: 0},
          { hole: 10, played: false, points: 0},
          { hole: 11, played: false, points: 0},
          { hole: 12, played: false, points: 0},
          { hole: 13, played: false, points: 0},
          { hole: 14, played: false, points: 0},
          { hole: 15, played: false, points: 0},
          { hole: 16, played: false, points: 0},
          { hole: 17, played: false, points: 0},
          { hole: 18, played: false, points: 0},
        ]
      }
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesComponent, RangePipe ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ FormsModule, BrowserModule ],
      providers: [
        { provide: CompetitionsService, useValue: mockCompetitionService },
        { provide: Router, useValue: mockRouter },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call saveCompetition', () => {
    component.competitionInfo = { name: 'Conejada', team1: 'Team 1', team2: 'Team 2'};
    // Needs to be properly implemented
    // expect(component.onSubmit(formValue)).toEqual(expectedCompetition);
  });
});
