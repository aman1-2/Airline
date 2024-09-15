const express = require("express");
const router = express.Router();
//Middlewares
const {FLightMiddlewares} = require("../../middlewares/index")
//Controllers
const CityControllers = require("../../controllers/city-controllers");
const AirportControllers = require("../../controllers/airport-controllers");
const AirplaneControllers = require("../../controllers/airplane-controllers");
const FlightControllers = require("../../controllers/flight-controllers");

//City Routes
router.post("/city", CityControllers.create);
router.delete("/city/:id", CityControllers.destroy);
router.patch("/city/:id", CityControllers.update);
router.get("/city/:id", CityControllers.get);
router.get("/city", CityControllers.getAll);
router.get("/city/airports:id", CityControllers.getAllAirports);


//Airport Routes
router.post("/airport", AirportControllers.create);
router.delete("/airport/:id", AirportControllers.destroy);
router.patch("/airport/:id", AirportControllers.update);
router.get("/airport/:id", AirportControllers.get);
router.get("/airport", AirportControllers.getAll)

//Airplane Routes
router.post("/airplane", AirplaneControllers.create);
router.delete("/airplane/:id", AirplaneControllers.destroy);
router.patch("/airplane/:id", AirplaneControllers.update);
router.get("/airplane/:id", AirplaneControllers.get);

//Flight Routes
router.post("/flights", FLightMiddlewares.validateCreateFlight, FlightControllers.create);
router.get("/flight/:id", FlightControllers.get);
router.get("/flights", FlightControllers.getAll);
router.patch("/flight/:id", FlightControllers.update);

module.exports = router;