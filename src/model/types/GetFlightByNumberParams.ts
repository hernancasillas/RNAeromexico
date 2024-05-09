
export type GetFlightByNumberParams = {
    flightNumber: string;
    date: Date;
}

export type GetFlightByDestinationParams = {
    origin?: string;
    destination?: string;
    date: Date;
}