export interface Details {
    get: string,
    parameters: {
        id: string
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
                code: string,
                country: string,
                founded: number,
                national: boolean,
                logo: string
            },
            venue: {
                id: number,
                name: string,
                address: string,
                city: string,
                capacity: number,
                surface: string,
                image: string
            }
        }
    ]

}