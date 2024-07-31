import mongoose from "mongoose";
import configs from "../configs";
import logger from "./logger";

let dataBase;

const connectDB = async () => {
    //from config/index.js url assign to MONGODB_URL
    const MONGODB_URL = configs.DB_CONNECTION_STRING;

    //check weather data base is available or not
    if(dataBase) return;
    mongoose.connect(MONGODB_URL).then((connection) => {
        dataBase = connection;
        logger.info("Database Synced");
    }).catch((err) => {
       logger.error(err.message);
    })
}


export {connectDB};