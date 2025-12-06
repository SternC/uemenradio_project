import express from "express";
import { submitForm, getForms } from "../controllers/formController.js";

const router = express.Router();

router.post("/form-submit", submitForm);
router.get("/form-get", getForms);

export default router;