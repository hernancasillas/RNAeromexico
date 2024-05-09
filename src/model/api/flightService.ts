import {FlightService} from '@classes/FlightService';
import {LocalDataService} from '@classes/LocalDataService';

const dataService = new LocalDataService();
export const flightService = new FlightService(dataService);
