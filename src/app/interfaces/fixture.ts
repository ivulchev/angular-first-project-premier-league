export interface Fixture {
    fixture:{
    id: number,
    referee: string,
    timezone: string,
    date: string,
    timestamp: number,
    periods:{
    first: string,
    second: string
    },
    venue:{
    id: number,
    name: string,
    city: string,
    },
    status:{
    long: string,
    short: string,
    elapsed: string
    }
    },
    league:{
    id: number,
    name: string,
    country: string,
    logo:string,
    flag:string,
    season: number,
    round:string
    }
    teams:{
    home:{
    id: number,
    name:string,
    logo:string,
    winner:string
    }
    away:{
    id: number,
    name:string,
    logo:string,
    winner: string
    }
    }
    goals:{
    home: string,
    away: string
    }
    score:{
    halftime:{
    home:string,
    away:string
    }
    fulltime:{
      home:string,
      away:string
    }
    extratime:{
      home:string,
      away:string
    }
    penalty:{
      home:string,
      away:string
    }
    }
    
}