export interface Results {
  "get": string
  "parameters": {
    "league": string
    "next": string
    "season": string
  }
  "errors": [
  ]
  "results": number
  "paging": {
    "current": number
    "total": number
  }
  response: [
    {
      "fixture": {
        "id": number
        "referee": string
        "timezone": string
        "date": string
        "timestamp": number
        "periods": {
          "first": number
          "second": any
        }
        "venue": {
          "id": number
          "name": string
          "city": string
        }
        "status": {
          "long": string
          "short": string
          "elapsed": number
        }
      }
      "league": {
        "id": number
        "name": string
        "country": string
        "logo": string
        "flag": string
        "season": number
        "round": string
      }
      "teams": {
        "home": {
          "id": number
          "name": string
          "logo": string
          "winner": boolean
        }
        "away": {
          "id": number
          "name": string
          "logo": string
          "winner": boolean
        }
      }
      "goals": {
        "home": any
        "away": any
      }
      "score": {
        "halftime": {
          "home": any
          "away": any
        }
        "fulltime": {
          "home": any
          "away": any
        }
        "extratime": {
          "home": any
          "away": any
        }
        "penalty": {
          "home": any
          "away": any
        }
      }
    }
  ]
}