const express = require("express");

const { PORT } = require("./config/serverConfig");
const ApiRouter = require("./routes/index");
const db = require("./models/index");

const StartAndStopServer = async () => {
    //Create the express object
    const app = express();

    //Body-Parser
    app.use(express.json());
    app.use(express.urlencoded({extended : true}));

    //Routes
    app.use("/api", ApiRouter);

    app.listen(PORT, ()=>{
        console.log(`Server Started at Port: ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true});
        }
    });
}

StartAndStopServer();