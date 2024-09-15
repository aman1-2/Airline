const { AirplaneService } = require("../services/index");

const airplaneService = new AirplaneService();

const create = async (req, res) => {
    try {
        const airplane = await airplaneService.create(req.body);
        return res.status(201).json({
            data: airplane,
            success: true,
            message: "Successfully created a airplane.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not able to create a airplane.",
            success: false,
            err: error
        });
    }
};

const destroy = async (req, res) => {
    try {
        const airplane = await airplaneService.destroy(req.params.id);
        return res.status(200).json({
            data: airplane,
            success: true,
            message: "Successfully deleted a airplane.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not able to delete a airplane.",
            success: false,
            err: error
        });
    }
};

const update = async (req, res) => {
    try {
        const airplane = await airplaneService.update(req.params.id, req.body);
        return res.status(200).json({
            data: airplane,
            success: true,
            message: "Successfully updated a airplane.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not able to update a airplane.",
            success: false,
            err: error
        });
    }
};

const get = async (req, res) => {
    try {
        const airplane = await airplaneService.get(req.params.id);
        return res.status(200).json({
            data: airplane,
            success: true,
            message: "Successfully fetched a airplane.",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Not able to fetch a airplane.",
            success: false,
            err: error
        });
    }
};

module.exports = {
    create,
    destroy,
    update,
    get
};