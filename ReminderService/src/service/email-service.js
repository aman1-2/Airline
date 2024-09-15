const sender = require("../config/emailConfig");

const TicketRepository = require("../repository/ticket-repository");

const repo = new TicketRepository();

const sendBasicEmail = (mailTo, mailSubject, mailBody) => {
    try {
        //This will take the mailFrom id as the EmailId configured by you during the setup of this service
        //We can too have its response as its a promise bases task.
        sender.sendMail({
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
    } catch (error) {
        console.log(error);
    }
};

const fetchPendingEmails = async () => {
    try {
        const response = await repo.get({status: "PENDING"});
        return response;
    } catch (error) {
        console.log(error);
    }
}

const createNotification = async (data) => {
    try {
        console.log(data);
        const response = await repo.create(data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const update = async (ticketId, data) => {
    try {
        const response = await repo.update(ticketId, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const subscribeEvent = async (payload) => {
    let service = payload.service;
    let data = payload.data;
    switch(service) {
        case 'CREATE_TICKET':
            await createNotification(data);
            break;
        
        case 'SEND_BASIC_MAIL':
            await sendBasicEmail(data);
            break;
        
        default:
            console.log("No valid event received.");
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    update,
    subscribeEvent
};