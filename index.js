import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5173;

app.listen(port, () => console.log(`listen port ${port}...`));
