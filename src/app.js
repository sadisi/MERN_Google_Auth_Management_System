import express from "express";
import cors from "cors";
import logger  from "./utils/logger.js";
import 'dotenv/config';
import { connectDB } from "./utils/databse.js";




const PORT = process.env.PORT || "8090";


const app = express();
app.use(cors());
app.use(express.json({limit: '20mb'}));

app.get("/", (req, res) => {
    res.send("<h2>Welcome to Library Management System API</h2>");
});

app.listen(PORT, () => {
    logger.info(`Server is running on port : ${PORT}`);
    connectDB();
});

