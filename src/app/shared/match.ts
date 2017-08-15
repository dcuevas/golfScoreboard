export interface Match {
  players1: Player[];
  players2: Player[];
  score1: Score[];
  score2: Score[];
}

export interface Score {
  hole: number;
  played: boolean;
  points: number;
}

export interface Player {
  name: string;
  surname: string;
}

