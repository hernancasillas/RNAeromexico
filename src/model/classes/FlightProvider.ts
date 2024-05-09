import { FlightStatus } from "../../view-model/interfaces/FlightStatus";
import { GetFlightByDestinationParams, GetFlightByNumberParams } from "../types/GetFlightByNumberParams";

export abstract class FlightProvider {

    abstract getFlightsByNumber(getFlightByNumberParams: GetFlightByNumberParams): Promise<FlightStatus[]>;

    abstract getFlightsByDestination(getFlightByDestinationParams: GetFlightByDestinationParams): Promise<FlightStatus[]>;

}