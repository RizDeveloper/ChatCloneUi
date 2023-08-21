import express from "express";
import dbConnection from "./database/db.js";

const app = express();
dbConnection();
const PORT = 8000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
