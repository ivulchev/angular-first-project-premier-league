import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Team } from '../team';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const teams = [
            {
                rank: 1,
                team: {
                    id: 50,
                    name: "Manchester City",
                    logo: "https://media.api-sports.io/football/teams/50.png"
                },
                points: 74,
                goalsDiff: 45,
                group: "Premier League",
                form: "WWWLW",
                status: "same",
                description: "Promotion - Champions League (Group Stage)",
                all: {
                    played: 31,
                    win: 23,
                    draw: 5,
                    lose: 3,
                    goals: {
                        for: 66,
                        against: 21
                    }
                },
                home: {
                    played: 16,
                    win: 12,
                    draw: 2,
                    lose: 2,
                    goals: {
                        for: 36,
                        against: 13
                    }
                },
                away: {
                    played: 15,
                    win: 11,
                    draw: 3,
                    lose: 1,
                    goals: {
                        for: 30,
                        against: 8
                    }
                }
            }, {
                rank: 2,
                team: {
                    id: 33,
                    name: "Manchester United",
                    logo: "https://media.api-sports.io/football/teams/33.png"
                },
                points: 60,
                goalsDiff: 25,
                group: "Premier League",
                form: "WWWDD",
                status: "same",
                description: "Promotion - Champions League (Group Stage)",
                all: {
                    played: 30,
                    win: 17,
                    draw: 9,
                    lose: 4,
                    goals: {
                        for: 58,
                        against: 33
                    }
                },
                home: {
                    played: 15,
                    win: 8,
                    draw: 3,
                    lose: 4,
                    goals: {
                        for: 31,
                        against: 20
                    }
                },
                away: {
                    played: 15,
                    win: 9,
                    draw: 6,
                    lose: 0,
                    goals: {
                        for: 27,
                        against: 13
                    }
                }
            }, {
                rank: 3,
                team: {
                    id: 46,
                    name: "Leicester",
                    logo: "https://media.api-sports.io/football/teams/46.png"
                },
                points: 56,
                goalsDiff: 19,
                group: "Premier League",
                form: "LWWDL",
                status: "same",
                description: "Promotion - Champions League (Group Stage)",
                all: {
                    played: 30,
                    win: 17,
                    draw: 5,
                    lose: 8,
                    goals: {
                        for: 53,
                        against: 34
                    }
                },
                home: {
                    played: 15,
                    win: 7,
                    draw: 1,
                    lose: 7,
                    goals: {
                        for: 25,
                        against: 21
                    }
                },
                away: {
                    played: 15,
                    win: 10,
                    draw: 4,
                    lose: 1,
                    goals: {
                        for: 28,
                        against: 13
                    }
                }
            }, {
                rank: 4,
                team: {
                    id: 48,
                    name: "West Ham",
                    logo: "https://media.api-sports.io/football/teams/48.png"
                },
                points: 52,
                goalsDiff: 11,
                group: "Premier League",
                form: "WDLWL",
                status: "same",
                description: "Promotion - Champions League (Group Stage)",
                all: {
                    played: 30,
                    win: 15,
                    draw: 7,
                    lose: 8,
                    goals: {
                        for: 48,
                        against: 37
                    }
                },
                home: {
                    played: 15,
                    win: 8,
                    draw: 4,
                    lose: 3,
                    goals: {
                        for: 26,
                        against: 18
                    }
                },
                away: {
                    played: 15,
                    win: 7,
                    draw: 3,
                    lose: 5,
                    goals: {
                        for: 22,
                        against: 19
                    }
                }
            }, {
                rank: 5,
                team: {
                    id: 49,
                    name: "Chelsea",
                    logo: "https://media.api-sports.io/football/teams/49.png"
                },
                points: 51,
                goalsDiff: 16,
                group: "Premier League",
                form: "LDWWD",
                status: "same",
                description: "Promotion - Europa League (Group Stage)",
                all: {
                    played: 30,
                    win: 14,
                    draw: 9,
                    lose: 7,
                    goals: {
                        for: 46,
                        against: 30
                    }
                },
                home: {
                    played: 15,
                    win: 7,
                    draw: 5,
                    lose: 3,
                    goals: {
                        for: 27,
                        against: 16
                    }
                },
                away: {
                    played: 15,
                    win: 7,
                    draw: 4,
                    lose: 4,
                    goals: {
                        for: 19,
                        against: 14
                    }
                }
            }, {
                rank: 6,
                team: {
                    id: 47,
                    name: "Tottenham",
                    logo: "https://media.api-sports.io/football/teams/47.png"
                },
                points: 49,
                goalsDiff: 19,
                group: "Premier League",
                form: "DWLWW",
                status: "same",
                description: "NULL",
                all: {
                    played: 30,
                    win: 14,
                    draw: 7,
                    lose: 9,
                    goals: {
                        for: 51,
                        against: 32
                    }
                },
                home: {
                    played: 14,
                    win: 7,
                    draw: 3,
                    lose: 4,
                    goals: {
                        for: 25,
                        against: 14
                    }
                },
                away: {
                    played: 16,
                    win: 7,
                    draw: 4,
                    lose: 5,
                    goals: {
                        for: 26,
                        against: 18
                    }
                }
            }, {
                rank: 7,
                team: {
                    id: 40,
                    name: "Liverpool",
                    logo: "https://media.api-sports.io/football/teams/40.png"
                },
                points: 49,
                goalsDiff: 15,
                group: "Premier League",
                form: "WWLLW",
                status: "same",
                description: "NULL",
                all: {
                    played: 30,
                    win: 14,
                    draw: 7,
                    lose: 9,
                    goals: {
                        for: 51,
                        against: 36
                    }
                },
                home: {
                    played: 15,
                    win: 7,
                    draw: 2,
                    lose: 6,
                    goals: {
                        for: 22,
                        against: 18
                    }
                },
                away: {
                    played: 15,
                    win: 7,
                    raw: 5,
                    lose: 3,
                    goals: {
                        for: 29,
                        against: 18
                    }
                }
            }, {
                rank: 8,
                team: {
                    id: 45,
                    name: "Everton",
                    logo: "https://media.api-sports.io/football/teams/45.png"
                },
                points: 47,
                goalsDiff: 3,
                group: "Premier League",
                form: "DLLWW",
                status: "same",
                description: "NULL",
                all: {
                    played: 29,
                    win: 14,
                    draw: 5,
                    lose: 10,
                    goals: {
                        for: 41,
                        against: 38
                    }
                },
                home: {
                    played: 15,
                    win: 5,
                    draw: 3,
                    lose: 7,
                    goals: {
                        for: 20,
                        against: 23
                    }
                },
                away: {
                    played: 14,
                    win: 9,
                    draw: 2,
                    lose: 3,
                    goals: {
                        for: 21,
                        against: 15
                    }
                }
            }, {
                rank: 20,
                team: {
                    id: 62,
                    name: "Sheffield Utd",
                    logo: "https://media.api-sports.io/football/teams/62.png"
                },
                points: 14,
                goalsDiff: -35,
                group: "Premier League",
                form: "LLLWL",
                status: "same",
                description: "Relegation - Championship",
                all: {
                    played: 30,
                    win: 4,
                    draw: 2,
                    lose: 24,
                    goals: {
                        for: 17,
                        against: 52
                    }
                },
                home: {
                    played: 15,
                    win: 3,
                    draw: 1,
                    lose: 11,
                    goals: {
                        for: 10,
                        against: 22
                    }
                },
                away: {
                    played: 15,
                    win: 1,
                    draw: 1,
                    lose: 13,
                    goals: {
                        for: 7,
                        against: 30
                    }
                }
            }
        ];
        const fixtures = [
            {
                fixture: {
                    id: 710826,
                    referee: "Peter Bankes, England",
                    timezone: "UTC",
                    date: "2022-03-05T15:00:00+00:00",
                    timestamp: 1646492400,
                    periods: {
                        first: "NULL",
                        second: "NULL",
                    },
                    venue: {
                        id: 495,
                        name: "Villa Park",
                        city: "Birmingham"
                    },
                    status: {
                        long: "Not Started",
                        short: "NS",
                        elapsed: "NULL",
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 28",
                },
                teams: {
                    home: {
                        id: 66,
                        name: "Aston Villa",
                        logo: "https://media.api-sports.io/football/teams/66.png",
                        winner: "NULL"
                    },
                    away: {
                        id: 41,
                        name: "Southampton",
                        logo: "https://media.api-sports.io/football/teams/41.png",
                        winner: "NULL"
                    }
                },
                goals: {
                    home: "NULL",
                    away: "NULL"
                },
                score: {
                    halftime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    fulltime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }
            },
            {
                fixture: {
                    id: 710827,
                    referee: "Andre Marriner, England",
                    timezone: "UTC",
                    date: "2022-03-05T15:00:00+00:00",
                    timestamp: 1646492400,
                    periods: {
                        first: "NULL",
                        second: "NULL"
                    },
                    venue: {
                        id: 512,
                        name: "Turf Moor",
                        city: "Burnley"
                    },
                    status: {
                        long: "Not Started",
                        short: "NS",
                        elapsed: "NULL"
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 28"
                },
                teams: {
                    home: {
                        id: 44,
                        name: "Burnley",
                        logo: "https://media.api-sports.io/football/teams/44.png",
                        winner: "NULL"
                    },
                    away: {
                        id: 49,
                        name: "Chelsea",
                        logo: "https://media.api-sports.io/football/teams/49.png",
                        winner: "NULL"
                    }
                },
                goals: {
                    home: "NULL",
                    away: "NULL"
                },
                score: {
                    halftime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    fulltime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }
            },
            {
                fixture: {
                    id: 710826,
                    referee: "Peter Bankes, England",
                    timezone: "UTC",
                    date: "2022-03-05T15:00:00+00:00",
                    timestamp: 1646492400,
                    periods: {
                        first: "NULL",
                        second: "NULL",
                    },
                    venue: {
                        id: 495,
                        name: "Villa Park",
                        city: "Birmingham"
                    },
                    status: {
                        long: "Not Started",
                        short: "NS",
                        elapsed: "NULL",
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 28",
                },
                teams: {
                    home: {
                        id: 66,
                        name: "Aston Villa",
                        logo: "https://media.api-sports.io/football/teams/66.png",
                        winner: "NULL"
                    },
                    away: {
                        id: 41,
                        name: "Southampton",
                        logo: "https://media.api-sports.io/football/teams/41.png",
                        winner: "NULL"
                    }
                },
                goals: {
                    home: "NULL",
                    away: "NULL"
                },
                score: {
                    halftime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    fulltime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }

            },
            {
                fixture: {
                    id: 710826,
                    referee: "Peter Bankes, England",
                    timezone: "UTC",
                    date: "2022-03-05T15:00:00+00:00",
                    timestamp: 1646492400,
                    periods: {
                        first: "NULL",
                        second: "NULL",
                    },
                    venue: {
                        id: 495,
                        name: "Villa Park",
                        city: "Birmingham"
                    },
                    status: {
                        long: "Not Started",
                        short: "NS",
                        elapsed: "NULL",
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 28",
                },
                teams: {
                    home: {
                        id: 66,
                        name: "Aston Villa",
                        logo: "https://media.api-sports.io/football/teams/66.png",
                        winner: "NULL"
                    },
                    away: {
                        id: 41,
                        name: "Southampton",
                        logo: "https://media.api-sports.io/football/teams/41.png",
                        winner: "NULL"
                    }
                },
                goals: {
                    home: "NULL",
                    away: "NULL"
                },
                score: {
                    halftime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    fulltime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }
            },
            {
                fixture: {
                    id: 710827,
                    referee: "Andre Marriner, England",
                    timezone: "UTC",
                    date: "2022-03-05T15:00:00+00:00",
                    timestamp: 1646492400,
                    periods: {
                        first: "NULL",
                        second: "NULL"
                    },
                    venue: {
                        id: 512,
                        name: "Turf Moor",
                        city: "Burnley"
                    },
                    status: {
                        long: "Not Started",
                        short: "NS",
                        elapsed: "NULL"
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 28"
                },
                teams: {
                    home: {
                        id: 44,
                        name: "Burnley",
                        logo: "https://media.api-sports.io/football/teams/44.png",
                        winner: "NULL"
                    },
                    away: {
                        id: 49,
                        name: "Chelsea",
                        logo: "https://media.api-sports.io/football/teams/49.png",
                        winner: "NULL"
                    }
                },
                goals: {
                    home: "NULL",
                    away: "NULL"
                },
                score: {
                    halftime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    fulltime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }
            },
            {
                fixture: {
                    id: 710826,
                    referee: "Peter Bankes, England",
                    timezone: "UTC",
                    date: "2022-03-05T15:00:00+00:00",
                    timestamp: 1646492400,
                    periods: {
                        first: "NULL",
                        second: "NULL",
                    },
                    venue: {
                        id: 495,
                        name: "Villa Park",
                        city: "Birmingham"
                    },
                    status: {
                        long: "Not Started",
                        short: "NS",
                        elapsed: "NULL",
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 28",
                },
                teams: {
                    home: {
                        id: 66,
                        name: "Aston Villa",
                        logo: "https://media.api-sports.io/football/teams/66.png",
                        winner: "NULL"
                    },
                    away: {
                        id: 41,
                        name: "Southampton",
                        logo: "https://media.api-sports.io/football/teams/41.png",
                        winner: "NULL"
                    }
                },
                goals: {
                    home: "NULL",
                    away: "NULL"
                },
                score: {
                    halftime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    fulltime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                },

            },
            {
                fixture: {
                    id: 710826,
                    referee: "Peter Bankes, England",
                    timezone: "UTC",
                    date: "2022-03-05T15:00:00+00:00",
                    timestamp: 1646492400,
                    periods: {
                        first: "NULL",
                        second: "NULL",
                    },
                    venue: {
                        id: 495,
                        name: "Villa Park",
                        city: "Birmingham"
                    },
                    status: {
                        long: "Not Started",
                        short: "NS",
                        elapsed: "NULL",
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 28",
                },
                teams: {
                    home: {
                        id: 66,
                        name: "Aston Villa",
                        logo: "https://media.api-sports.io/football/teams/66.png",
                        winner: "NULL"
                    },
                    away: {
                        id: 41,
                        name: "Southampton",
                        logo: "https://media.api-sports.io/football/teams/41.png",
                        winner: "NULL"
                    }
                },
                goals: {
                    home: "NULL",
                    away: "NULL"
                },
                score: {
                    halftime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    fulltime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }
            },
            {
                fixture: {
                    id: 710827,
                    referee: "Andre Marriner, England",
                    timezone: "UTC",
                    date: "2022-03-05T15:00:00+00:00",
                    timestamp: 1646492400,
                    periods: {
                        first: "NULL",
                        second: "NULL"
                    },
                    venue: {
                        id: 512,
                        name: "Turf Moor",
                        city: "Burnley"
                    },
                    status: {
                        long: "Not Started",
                        short: "NS",
                        elapsed: "NULL"
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 28"
                },
                teams: {
                    home: {
                        id: 44,
                        name: "Burnley",
                        logo: "https://media.api-sports.io/football/teams/44.png",
                        winner: "NULL"
                    },
                    away: {
                        id: 49,
                        name: "Chelsea",
                        logo: "https://media.api-sports.io/football/teams/49.png",
                        winner: "NULL"
                    }
                },
                goals: {
                    home: "NULL",
                    away: "NULL"
                },
                score: {
                    halftime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    fulltime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }
            },
            {
                fixture: {
                    id: 710826,
                    referee: "Peter Bankes, England",
                    timezone: "UTC",
                    date: "2022-03-05T15:00:00+00:00",
                    timestamp: 1646492400,
                    periods: {
                        first: "NULL",
                        second: "NULL",
                    },
                    venue: {
                        id: 495,
                        name: "Villa Park",
                        city: "Birmingham"
                    },
                    status: {
                        long: "Not Started",
                        short: "NS",
                        elapsed: "NULL",
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 28",
                },
                teams: {
                    home: {
                        id: 66,
                        name: "Aston Villa",
                        logo: "https://media.api-sports.io/football/teams/66.png",
                        winner: "NULL"
                    },
                    away: {
                        id: 41,
                        name: "Southampton",
                        logo: "https://media.api-sports.io/football/teams/41.png",
                        winner: "NULL"
                    }
                },
                goals: {
                    home: "NULL",
                    away: "NULL"
                },
                score: {
                    halftime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    fulltime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                },

            },
            {
                fixture: {
                    id: 710826,
                    referee: "Peter Bankes, England",
                    timezone: "UTC",
                    date: "2022-03-05T15:00:00+00:00",
                    timestamp: 1646492400,
                    periods: {
                        first: "NULL",
                        second: "NULL",
                    },
                    venue: {
                        id: 495,
                        name: "Villa Park",
                        city: "Birmingham"
                    },
                    status: {
                        long: "Not Started",
                        short: "NS",
                        elapsed: "NULL",
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 28",
                },
                teams: {
                    home: {
                        id: 66,
                        name: "Aston Villa",
                        logo: "https://media.api-sports.io/football/teams/66.png",
                        winner: "NULL"
                    },
                    away: {
                        id: 41,
                        name: "Southampton",
                        logo: "https://media.api-sports.io/football/teams/41.png",
                        winner: "NULL"
                    }
                },
                goals: {
                    home: "NULL",
                    away: "NULL"
                },
                score: {
                    halftime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    fulltime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                },

            }
        ];
        const results = [
            {

                fixture: {
                    id: 710816,
                    referee: "NULL",
                    timezone: "UTC",
                    date: "2022-03-16T20:15:00+00:00",
                    timestamp: 1647461700,
                    periods: {
                        first: "NULL",
                        second: "NULL"
                    },
                    venue: {
                        id: 494,
                        name: "Emirates Stadium",
                        city: "London"
                    },
                    status: {
                        long: "Not Started",
                        short: "NS",
                        elapsed: "NULL"
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 27"
                },
                teams: {
                    home: {
                        id: 42,
                        name: "Arsenal",
                        logo: "https://media.api-sports.io/football/teams/42.png",
                        winner: "NULL"
                    },
                    away: {
                        id: 40,
                        name: "Liverpool",
                        logo: "https://media.api-sports.io/football/teams/40.png",
                        winner: "NULL"
                    }
                },
                goals: {
                    home: "NULL",
                    away: "NULL"
                },
                score: {
                    halftime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    fulltime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }
            },
            {
                fixture: {
                    id: 710817,
                    referee: "M. Dean",
                    timezone: "UTC",
                    date: "2022-02-26T15:00:00+00:00",
                    timestamp: 1645887600,
                    periods: {
                        first: 1645887600,
                        second: 1645891200
                    },
                    venue: {
                        id: 10503,
                        name: "Brentford Community Stadium",
                        city: "Brentford, Middlesex"
                    },
                    status: {
                        long: "Match Finished",
                        short: "FT",
                        elapsed: 90
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 27"
                },
                teams: {
                    home: {
                        id: 55,
                        name: "Brentford",
                        logo: "https://media.api-sports.io/football/teams/55.png",
                        winner: false
                    },
                    away: {
                        id: 34,
                        name: "Newcastle",
                        logo: "https://media.api-sports.io/football/teams/34.png",
                        winner: true
                    }
                },
                goals: {
                    home: 0,
                    away: 2
                },
                score: {
                    halftime: {
                        home: 0,
                        away: 2
                    },
                    fulltime: {
                        home: 0,
                        away: 2
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }
            },
            {
                fixture: {
                    id: 710818,
                    referee: "J. Brooks",
                    timezone: "UTC",
                    date: "2022-02-26T15:30:00+00:00",
                    timestamp: 1645889400,
                    periods: {
                        first: 1645889400,
                        second: 1645893000
                    },
                    venue: {
                        id: 508,
                        name: "The American Express Community Stadium",
                        city: "Falmer, East Sussex"
                    },
                    status: {
                        long: "Match Finished",
                        short: "FT",
                        elapsed: 90
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 27"
                },
                teams: {
                    home: {
                        id: 51,
                        name: "Brighton",
                        logo: "https://media.api-sports.io/football/teams/51.png",
                        winner: false
                    },
                    away: {
                        id: 66,
                        name: "Aston Villa",
                        logo: "https://media.api-sports.io/football/teams/66.png",
                        winner: true
                    }
                },
                goals: {
                    home: 0,
                    away: 2
                },
                score: {
                    halftime: {
                        home: 0,
                        away: 1
                    },
                    fulltime: {
                        home: 0,
                        away: 2
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }
            },
            {
                fixture: {
                    id: 710819,
                    referee: "NULL",
                    timezone: "UTC",
                    date: "2022-02-27T14:00:00+00:00",
                    timestamp: 1645970400,
                    periods: {
                        first: "NULL",
                        second: "NULL",
                    },
                    venue: {
                        id: 519,
                        name: "Stamford Bridge",
                        city: "London"
                    },
                    status: {
                        long: "Match Postponed",
                        short: "PST",
                        elapsed: "NULL"
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 27"
                },
                teams: {
                    home: {
                        id: 49,
                        name: "Chelsea",
                        logo: "https://media.api-sports.io/football/teams/49.png",
                        winner: "NULL"
                    },
                    away: {
                        id: 46,
                        name: "Leicester",
                        logo: "https://media.api-sports.io/football/teams/46.png",
                        winner: "NULL"
                    }
                },
                goals: {
                    home: "NULL",
                    away: "NULL"
                },
                score: {
                    halftime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    fulltime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }
            },
            {

                fixture: {
                    id: 710816,
                    referee: "NULL",
                    timezone: "UTC",
                    date: "2022-03-16T20:15:00+00:00",
                    timestamp: 1647461700,
                    periods: {
                        first: "NULL",
                        second: "NULL"
                    },
                    venue: {
                        id: 494,
                        name: "Emirates Stadium",
                        city: "London"
                    },
                    status: {
                        long: "Not Started",
                        short: "NS",
                        elapsed: "NULL"
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 27"
                },
                teams: {
                    home: {
                        id: 42,
                        name: "Arsenal",
                        logo: "https://media.api-sports.io/football/teams/42.png",
                        winner: "NULL"
                    },
                    away: {
                        id: 40,
                        name: "Liverpool",
                        logo: "https://media.api-sports.io/football/teams/40.png",
                        winner: "NULL"
                    }
                },
                goals: {
                    home: "NULL",
                    away: "NULL"
                },
                score: {
                    halftime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    fulltime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }
            },
            {
                fixture: {
                    id: 710817,
                    referee: "M. Dean",
                    timezone: "UTC",
                    date: "2022-02-26T15:00:00+00:00",
                    timestamp: 1645887600,
                    periods: {
                        first: 1645887600,
                        second: 1645891200
                    },
                    venue: {
                        id: 10503,
                        name: "Brentford Community Stadium",
                        city: "Brentford, Middlesex"
                    },
                    status: {
                        long: "Match Finished",
                        short: "FT",
                        elapsed: 90
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 27"
                },
                teams: {
                    home: {
                        id: 55,
                        name: "Brentford",
                        logo: "https://media.api-sports.io/football/teams/55.png",
                        winner: false
                    },
                    away: {
                        id: 34,
                        name: "Newcastle",
                        logo: "https://media.api-sports.io/football/teams/34.png",
                        winner: true
                    }
                },
                goals: {
                    home: 0,
                    away: 2
                },
                score: {
                    halftime: {
                        home: 0,
                        away: 2
                    },
                    fulltime: {
                        home: 0,
                        away: 2
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }
            },
            {
                fixture: {
                    id: 710818,
                    referee: "J. Brooks",
                    timezone: "UTC",
                    date: "2022-02-26T15:30:00+00:00",
                    timestamp: 1645889400,
                    periods: {
                        first: 1645889400,
                        second: 1645893000
                    },
                    venue: {
                        id: 508,
                        name: "The American Express Community Stadium",
                        city: "Falmer, East Sussex"
                    },
                    status: {
                        long: "Match Finished",
                        short: "FT",
                        elapsed: 90
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 27"
                },
                teams: {
                    home: {
                        id: 51,
                        name: "Brighton",
                        logo: "https://media.api-sports.io/football/teams/51.png",
                        winner: false
                    },
                    away: {
                        id: 66,
                        name: "Aston Villa",
                        logo: "https://media.api-sports.io/football/teams/66.png",
                        winner: true
                    }
                },
                goals: {
                    home: 0,
                    away: 2
                },
                score: {
                    halftime: {
                        home: 0,
                        away: 1
                    },
                    fulltime: {
                        home: 0,
                        away: 2
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }
            },
            {
                fixture: {
                    id: 710819,
                    referee: "NULL",
                    timezone: "UTC",
                    date: "2022-02-27T14:00:00+00:00",
                    timestamp: 1645970400,
                    periods: {
                        first: "NULL",
                        second: "NULL",
                    },
                    venue: {
                        id: 519,
                        name: "Stamford Bridge",
                        city: "London"
                    },
                    status: {
                        long: "Match Postponed",
                        short: "PST",
                        elapsed: "NULL"
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 27"
                },
                teams: {
                    home: {
                        id: 49,
                        name: "Chelsea",
                        logo: "https://media.api-sports.io/football/teams/49.png",
                        winner: "NULL"
                    },
                    away: {
                        id: 46,
                        name: "Leicester",
                        logo: "https://media.api-sports.io/football/teams/46.png",
                        winner: "NULL"
                    }
                },
                goals: {
                    home: "NULL",
                    away: "NULL"
                },
                score: {
                    halftime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    fulltime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }
            },
            {
                fixture: {
                    id: 710819,
                    referee: "NULL",
                    timezone: "UTC",
                    date: "2022-02-27T14:00:00+00:00",
                    timestamp: 1645970400,
                    periods: {
                        first: "NULL",
                        second: "NULL",
                    },
                    venue: {
                        id: 519,
                        name: "Stamford Bridge",
                        city: "London"
                    },
                    status: {
                        long: "Match Postponed",
                        short: "PST",
                        elapsed: "NULL"
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 27"
                },
                teams: {
                    home: {
                        id: 49,
                        name: "Chelsea",
                        logo: "https://media.api-sports.io/football/teams/49.png",
                        winner: "NULL"
                    },
                    away: {
                        id: 46,
                        name: "Leicester",
                        logo: "https://media.api-sports.io/football/teams/46.png",
                        winner: "NULL"
                    }
                },
                goals: {
                    home: "NULL",
                    away: "NULL"
                },
                score: {
                    halftime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    fulltime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }
            },
            {
                fixture: {
                    id: 710819,
                    referee: "NULL",
                    timezone: "UTC",
                    date: "2022-02-27T14:00:00+00:00",
                    timestamp: 1645970400,
                    periods: {
                        first: "NULL",
                        second: "NULL",
                    },
                    venue: {
                        id: 519,
                        name: "Stamford Bridge",
                        city: "London"
                    },
                    status: {
                        long: "Match Postponed",
                        short: "PST",
                        elapsed: "NULL"
                    }
                },
                league: {
                    id: 39,
                    name: "Premier League",
                    country: "England",
                    logo: "https://media.api-sports.io/football/leagues/39.png",
                    flag: "https://media.api-sports.io/flags/gb.svg",
                    season: 2021,
                    round: "Regular Season - 27"
                },
                teams: {
                    home: {
                        id: 49,
                        name: "Chelsea",
                        logo: "https://media.api-sports.io/football/teams/49.png",
                        winner: "NULL"
                    },
                    away: {
                        id: 46,
                        name: "Leicester",
                        logo: "https://media.api-sports.io/football/teams/46.png",
                        winner: "NULL"
                    }
                },
                goals: {
                    home: "NULL",
                    away: "NULL"
                },
                score: {
                    halftime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    fulltime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    extratime: {
                        home: "NULL",
                        away: "NULL"
                    },
                    penalty: {
                        home: "NULL",
                        away: "NULL"
                    }
                }
            }

        ];
        const details = [
            {
                id: 33,
                team: {
                    id: 33,
                    name: "Manchester United",
                    code: "MUN",
                    country: "England",
                    founded: 1878,
                    national: false,
                    logo: "https://media.api-sports.io/football/teams/33.png"
                },
                venue: {
                    id: 556,
                    name: "Old Trafford",
                    address: "Sir Matt Busby Way",
                    city: "Manchester",
                    capacity: 76212,
                    surface: "grass",
                    image: "https://media.api-sports.io/football/venues/556.png"
                }
            },
            {
            id:49,
            team:{
                id:49,
                name:"Chelsea",
                code:"CHE",
                country:"England",
                founded:1905,
                national:false,
                logo:"https://media.api-sports.io/football/teams/49.png"
                },
                venue:{
                id:519,
                name:"Stamford Bridge",
                address:"Fulham Road",
                city:"London",
                capacity:41841,
                surface:"grass",
                image:"https://media.api-sports.io/football/venues/519.png"
                }
            }

        ];
        return { teams: teams, fixtures: fixtures, results: results, details: details };
    }


    // Overrides the genId method to ensure that a hero always has an id.
    // If the teams array is empty,
    // the method below returns the initial number (11).
    // if the teams array is not empty, the method below returns the highest
    // hero id + 1.
    genId(teams: Team[]): number {
        return teams.length > 0 ? Math.max(...teams.map(team => team.team.id)) + 1 : 11;
    }
}
