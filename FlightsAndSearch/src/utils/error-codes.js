const { Model } = require("sequelize");

const clientErrorCodes = Object.freeze({
    BAD_REQUEST: 400,
    UNAUHTORISED: 401,
    NOT_FOUND: 404
});

const serverErrorCodes = Object.freeze({
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501
});

const SuccessCodes = Object.freeze({
    OK: 200,
    CREATED: 201,

})

module.exports = {
    clientErrorCodes,
    serverErrorCodes,
    SuccessCodes    
}