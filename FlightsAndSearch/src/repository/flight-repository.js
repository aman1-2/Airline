const {Op} = require('sequelize');
const { Flight } = require("../models/index");

class FlightRepository {

    #createFilter(data){
        let filter = {};

        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }

        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        let priceFilter = [];

        if(data.minPrice){
            // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
            priceFilter.push({price: {[Op.gte]: data.minPrice}});
        }

        if(data.maxPrice){
            // Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
            priceFilter.push({price: {[Op.lte]: data.maxPrice}});
        }

        // if(data.maxPrice && data.minPrice){
        //     Object.assign(filter, {price: {[Op.between]: [data.minPrice, data.maxPrice]}});
        //}

        Object.assign(filter, {[Op.and]: priceFilter});

        // console.log(filter)
        return filter;
    }

    async createFlight(data){
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer while creating the flight.");
            throw {error};
        }
    }

    async getFlight(flightId){
        try {
            const response = await Flight.findByPk(flightId);
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer while fetching the flight.");
            throw {error};
        }
    }

    async getAllFlights(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const response = await Flight.findAll({
                where: filterObject
            });
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer while fetching all the flights.");
            throw {error};
        }
    }

    async update(flightId, data) {
        try {
            await Flight.update(data, {
                where: {
                    id: flightId
                }
            });
        } catch (error) {
            console.log("Something went wrong in the repository layer while fetching all the flights.");
            throw {error};
        }
    }
}

module.exports = FlightRepository;

/*
filter object would make query like
where: {
    arrivalAirportId: 1,
    dapartureAirportId: 4,
    price:{
        [Op.gte]: data.minPrice(4000)
    }
} */