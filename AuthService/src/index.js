const express = require('express');

const { PORT, DB_SYNC } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
// const db = require("./models/index");


const setupAndStartServer = async () => {
    const app = express();

    //Body-parser
    app.use(express.json());
    app.use(express.urlencoded( {extended: true} ));

    //Api routes
    app.use("/api", apiRoutes);

    app.listen(PORT, async () => {
        console.log(`Started the server at Port: ${PORT}`);
        // if(DB_SYNC){
        //     console.log(DB_SYNC);
        //     db.sequelize.sync( {alter: true} );
        // }
    })
}

setupAndStartServer();