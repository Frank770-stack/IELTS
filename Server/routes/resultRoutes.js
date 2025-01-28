import express from "express";
import {
  getStudentScores,
  addStudentScores,
} from "../controllers/resultController.js";

const router = express.Router();

router.post("/score", getStudentScores);

router.post("/add-score", addStudentScores);

export default router;
