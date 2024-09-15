const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
    let flightRequestData = {
        flightNumber: req.body.flightNumber,
        airplaneId: req.body.airplaneId,
        departureAirportId: req.body.departureAirportId,
        arrivalAirportId: req.body.arrivalAirportId,
        arrivalTime: req.body.arrivalTime,
        departureTime: req.body.departureTime,
        price: req.body.price
    }
    try {
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data: flight,
            success: true,
            message: "Successfully created a flight.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to create a flight.",
            err: error
        });
    }
};

const get = async (req, res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched a flight.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch a flight.",
            err: error
        });
    }
};

const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlights(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched a flight.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch a flight.",
            err: error
        });
    }
};

const update = async (req, res) => {
    try {
        const response = await flightService.update(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated a flight.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to update a flight.",
            err: error
        });
    }
}

module.exports = {
    create,
    get,
    getAll,
    update
}