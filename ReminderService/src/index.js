const express = require('express');

const { PORT, REMINDER_BINDING_KEY } = require("./config/serverConfig");
// const {sendBasicEmail} = require("./service/email-service");
const jobs = require("./utils/job");
const TicketController = require("./controllers/ticket-controller");
const { createChannel, subscribeMessage } = require("./utils/messageQueues")
const EmailService= require("./service/email-service");

const setupAndStartServer = async () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true}));

    app.post('/api/v1/tickets', TicketController.create);

    const channel = await createChannel();
    subscribeMessage(channel, EmailService.subscribeEvent, REMINDER_BINDING_KEY);

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);

        //Mailing test
        // sendBasicEmail(
        //     "amanpratapsinghh12@gmail.com",
        //     "testing",
        //     "Hi Test"
        // );

        // jobs();
    });
}

setupAndStartServer();