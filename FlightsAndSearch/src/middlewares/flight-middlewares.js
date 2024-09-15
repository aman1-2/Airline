const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        //If any of the Body params is missing just throw a response
        return res.status(400).json({
            data: {},
            success: false,
            message: "Invalid request body for create flight.",
            err: "Missing mandatory Properties to create flight."
        });
    }

    next();
}

module.exports = {
    validateCreateFlight
}

/**
 * flightNumber,
 *  airplaneId,
 *  departureAirportId,
 *  arrivalAirportId,
 *  arrivalTime,
 *  departureTime,
 *  price,
 */