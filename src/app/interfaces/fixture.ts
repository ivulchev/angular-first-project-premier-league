export interface Fixture {
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
  "response": [
    {
      "fixture": {
        "id": number
        "referee": string
        "timezone": string
        "date": string
        "timestamp": number
        "periods": {
          "first": any
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
          "elapsed": any
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
      }
      "teams": {
        "home": {
          "id": number
          "name": string
          "logo": string
          "winner": any
        }
        "away": {
          "id": number
          "name": string
          "logo": string
          "winner": any
        }
        "goals": {
          "home": any
          "away": any
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
      }
    }
  ]
}