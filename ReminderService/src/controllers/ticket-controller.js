const TicketService = require('../service/email-service');

const create = async (req,res) => {
    try {
        const response = await TicketService.createNotification(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Succefully registered an email reminder.",
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to register an email reminder.",
            err: error
        });
    }
}

module.exports = {
    create
};