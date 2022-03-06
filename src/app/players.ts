export interface Players {
    get: string,
    parameters: {
        team: string
    },
    errors: [],
    results: number,
    paging: {
        current: number,
        total: number
    },
    response: [
        {
            team: {
                id: number,
                name: string,
                logo: string
            },
            players: [
                {
                    id: number,
                    name: string,
                    age: number,
                    number: number,
                    position: string,
                    photo: string
                }
            ]
        }
    ]
}
