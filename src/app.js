import express from "express";
import cors from "cors";
import 'dotenv/config';
const PORT = process.env.PORT || "8090";


const app = express();
app.use(cors());
app.use(express.json({limit: '20mb'}));

app.get("/", (req, res) => {
    res.send("<h2>Welcome to Library Management System API</h2>");
});

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`);
});

