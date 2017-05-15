export interface Score {
  hole: number;
  played: boolean;
  points: number;
}
export interface Match {
  players1: string[];
  players2: string[];
  score1: Score[];
  score2: Score[];
}


