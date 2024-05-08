import express from "express";
import { createMovie } from "../Controllers/Movie.controller.js";

const router = express.Router();
router.post("/", createMovie);
