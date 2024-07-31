import express from "express";
import cors from "cors";
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || "8090";


app.use(cors());
app.use(express.json({limit: '20mb'}));

app.listen(PORT)

