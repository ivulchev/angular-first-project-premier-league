export interface Team {
  rank: number,
  team: {
    id: number,
    name: string,
    logo: string
  },
  points: number,
  goalsDiff: number,
  form: string,
  all: {
    played: number,
    win: number,
    draw: number,
    lose: number,
    goals: {
      for: number,
      against: number
    },
    home: {
      played: number,
      win: number,
      draw: number,
      lose: number,
      goals: {
        for: number,
        against: number
      }
    },
    away: {
      played: number,
      win: number,
      draw: number,
      lose: number,
      goals: {
        for: number,
        against: number
      }
    }
  }
}