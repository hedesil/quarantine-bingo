export interface GameSession {
  id: string;
}

export interface GameSessions {
  list: GameSession[];
  preferred: string;
}
