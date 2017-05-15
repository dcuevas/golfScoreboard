import { Match } from './match';

export interface Competition {
  name: string;
  team1: string;
  team2: string;
  matches: Match[];
}


