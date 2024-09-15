const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error: "Arrival Time cann't be less than departure time"};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, 
                totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the service layer while creating the flight");
            throw {error};
        }
    }

    async getFlight(flightId){
        try {
            const response = await this.flightRepository.getFlight(flightId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer while fetching the flight");
            throw {error};
        }
    }

    async getAllFlights(filter){
        try {
            const response = await this.flightRepository.getAllFlights(filter);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer while fetching all the flights");
            throw {error};
        }
    }

    async update(flightId, data) {
        try {
            const response = await this.flightRepository.update(flightId, data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer while fetching all the flights");
            throw {error};
        }
    }
}

module.exports = FlightService;

/**
 * {
 *  flightNumber,
 *  airplaneId,
 *  departureAirportId,
 *  arrivalAirportId,
 *  arrivalTime,
 *  departureTime,
 *  price,
 *  totalSeats -> this will be taken from airplanes capacity
 * }
 */