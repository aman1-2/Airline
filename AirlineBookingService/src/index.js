const express = require('express');

const { PORT, DB_SYNC } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
const db = require("./models/index");

const startAndStopServer = async () => {
    const app = express();

    //Body-parser
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    //Routes
    app.use("/api", apiRoutes);
   
    app.listen(PORT, () => {
        console.log(`Server Started at Port: ${PORT}.`);

        if(!DB_SYNC) {
            db.sequelize.sync({ alter: true });
        }
    });
}

startAndStopServer();