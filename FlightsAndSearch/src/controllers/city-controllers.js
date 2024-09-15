const { CityService } = require("../services/index");

const cityService = new CityService();
/* 
 * METHOD -> POST 
 * data -> req.body
 */
const create = async (req, res) => {
    try {
        const city = await cityService.create(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created a City.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to create the City.",
            err: {error}
        });
    }
};

/* 
 * METHOD -> DELETE 
 * data -> req.params
 * Url -> /city/:id
 */
const destroy = async (req, res) =>{
    try {
        const response = await cityService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Succesfully deleted a City.",
            err: {}
        }); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to delete the City.",
            err: {error}
        });
    }
};

/* 
 * METHOD -> PATCH 
 * data -> req.params
 * Url -> /city/:id
 * data -> req.body
 */
const update = async (req, res) =>{
    try {
        const response = await cityService.update(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Succesfully Updated a City.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to update the City.",
            err: {error}
        });
    }
};

const get = async (req, res) =>{
    try {
        const response = await cityService.get(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Succesfully fetched a City.",
            err: {}
        }); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to get the City Details.",
            err: {error}
        });
    }
};

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAll(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "Succesfully fetched all the Cities.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to get all the Cities Details.",
            err: {error}
        });
    }
};

const getAllAirports = async (req, res) => {
    try {
        const response = await cityService.getAllAirports(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully fetched all the airports of a city.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Unable to fetch all the airports of a city.",
            err: error
        });
    }
};

module.exports = {
    create,
    update,
    destroy,
    get,
    getAll,
    getAllAirports
};