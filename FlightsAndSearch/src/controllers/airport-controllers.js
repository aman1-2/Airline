const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully created a airport.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to create a airport.",
            err: error
        });
    } 
};

const destroy = async (req, res) => {
    try {
        const airport = await airportService.destroy(req.params.id);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Successfully deleted a airport.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to delete a airport.",
            err: error
        });
    } 
};

const update = async (req, res) => {
    try {
        const airport = await airportService.update(req.params.id ,req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully updated a airport.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to update a airport.",
            err: error
        });
    } 
};

const get = async (req, res) => {
    try {
        const response = await airportService.get(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully fetched a airport.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch a airport.",
            err: error
        });
    } 
};

const getAll = async (req, res) => {
    try {
        const airports = await airportService.getAllAirports(req.query);
        return res.status(200).json({
            data: airports,
            success: true,
            message: "Successfully fetched all the airports.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch all the airports.",
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
};

