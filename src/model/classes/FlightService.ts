import { FlightStatus } from "../../view-model/interfaces/FlightStatus";
import { GetFlightByDestinationParams, GetFlightByNumberParams } from "../types/GetFlightByNumberParams";
import { FlightProvider } from './FlightProvider';

export class FlightService {

    private flightProvider: FlightProvider;

    constructor(flightProvider: FlightProvider) {
        this.flightProvider = flightProvider;
    }

    async getFlightByNumber(getFlightByNumberParams: GetFlightByNumberParams): Promise<FlightStatus[]> {
        const flightsResult = await this.flightProvider.getFlightsByNumber(getFlightByNumberParams);
        return flightsResult;
    }

    async getFlightByDestination(getFlightByDestinationParams: GetFlightByDestinationParams): Promise<FlightStatus[]> {
        const flightsResult = await this.flightProvider.getFlightsByDestination(getFlightByDestinationParams);
        return flightsResult;
    }

}