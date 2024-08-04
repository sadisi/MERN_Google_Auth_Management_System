import express from "express";
import cors from "cors";
import logger  from "./utils/logger.js";
import config from "./configs"
import 'dotenv/config';
import session from "express-session";
import { connectDB } from "./utils/databse.js";
import passport from "passport";
import {googleAuth } from "./configs/google.auth.js"




const PORT = process.env.PORT || "8090";


const app = express();
app.use(cors());
app.use(express.json({limit: '20mb'}));
app.use(session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24//new
    }
    
}))
app.use(passport.initialize());
app.use(passport.session());
//cuurrent
app.get("/", (req, res) => {
    res.send("<h2>Welcome to Library Management System API</h2>");
});

app.listen(PORT, () => {
    logger.info(`Server is running on port : ${PORT}`);
    connectDB();
    googleAuth(passport);
});

