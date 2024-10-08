const {StatusCodes} = require("http-status-codes");

const { BookingService } = require("../services/index");
const { createChannel, publishMessage } = require("../utils/messageQueues");
const { REMINDER_BINDING_KEY } = require('../config/serverConfig');

const bookingService = new BookingService();

class BookingController {
    constructor() {
    }

    async sendMessageToQueue(req, res) {
        const channel = await createChannel();
        const payload = {
            service: 'CREATE_TICKET',
            data: {
                subject: "This is a notification from Queue 1.",
                content: "Some queue will subscribe this.",
                recepientEmail: "amanpratapsinghh12@gmail.com",
                notificationTime: "2024-07-19T11:15:18"
            }
        };
        publishMessage(channel, REMINDER_BINDING_KEY, JSON.stringify(payload));
        res.status(200).json({
            message: "Successfully Published the event."
        });
    }

    async create(req, res) {
        try {
            const response = await bookingService.createBooking(req.body);
            return res.status(StatusCodes.OK).json({
                data: response,
                success: true,
                message: "Successfully made a Booking.",
                err: {}
            });
        } catch (error) {
            return res.status(error.statusCode).json({
                data: {},
                success: false,
                message: error.message,
                err: error.explanation
            });
        }
    };
}


module.exports = BookingController;