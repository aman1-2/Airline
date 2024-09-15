const express = require('express');
const router = express.Router();

const UserControllers = require("../../controllers/user-controllers");
const { authValidators } = require("../../middlewares/index");

//User Routes
router.post(
    "/signup",
    authValidators.validateUserAuth,
    UserControllers.create
);
router.post("/signin",
    authValidators.validateUserAuth,
    UserControllers.signIn
);
router.get("/isAuthenticated", UserControllers.isAuthenticated);
router.get("/isAdmin", authValidators.validateIsAdminRequest, UserControllers.isAdmin);

module.exports = router;