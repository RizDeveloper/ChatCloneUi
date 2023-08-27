import express from "express";
import { addUser } from "../Controller/userController.js";

const Route = express.Router();

Route.post("/add", addUser);

export default Route;
