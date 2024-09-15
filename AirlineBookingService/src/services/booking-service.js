const axios = require("axios");

const { BookingRepository } = require("../repository");
const { FLIGHT_SERVICE_PATH } = require("../config/serverConfig");
const { serviceError } = require("../utils/error/index");

class BookingService {
    constructor() {
        this.bookingRepository = new BookingRepository
    }

    async createBooking(data) {
        try {
            const flightId = data.flightId;

            const flightRequestUrl = `${FLIGHT_SERVICE_PATH}/api/v1/flight/${flightId}`;
            const response = await axios.get(flightRequestUrl);
            const flightData = response.data.data;
            const flightPrice = flightData.price;
            if(data.noOfSeats > flightData.totalSeats) {
                throw new serviceError("Something went wrong in the booking process.",
                    "Insufficient seats in the flight."
                );
            }
            const totalCost = flightPrice * data.noOfSeats;
            const bookingPayload = {...data, totalCost};
            const booking = await this.bookingRepository.create(bookingPayload);
            const flightUpdateUrl = `${FLIGHT_SERVICE_PATH}/api/v1/flight/${booking.flightId}`;
            await axios.patch(flightUpdateUrl, {totalSeats: flightData.totalSeats - booking.noOfSeats});
            const finalBooking = await this.bookingRepository.update(booking.id, {status: "Booked"});
            return finalBooking; 
            
        } catch (error) {
            console.log(error);
            if(error.name == "RepositoryError" || error.name == "ValidationError"){
                throw error;
            }
            throw new serviceError();
        }
    };
}

module.exports = BookingService;