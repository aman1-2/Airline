class AppError extends Error {
    constructor(name, message, explanation, stausCodes) {
        super();

        this.name = name;
        this.message = message;
        this.explanation = explanation;
        this.stausCodes = stausCodes;
    }
}

module.exports = AppError;