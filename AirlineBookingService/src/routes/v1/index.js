const express = require('express');
const router = express.Router();

const {BookingControllers} = require('../../controllers/index');

const bookingController = new BookingControllers();

router.post("/bookings", bookingController.create);
router.post("/publish", bookingController.sendMessageToQueue);

//Proxy route hitting
router.get("/proxy", (req, res) => {
    res.json({
        message: "Booking Service Route hitting."
    });
});

module.exports = router;