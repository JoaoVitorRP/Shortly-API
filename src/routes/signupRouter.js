import { Router } from "express";
import { signup } from "../controllers/signupController.js";
import { signupValidation } from "../middlewares/signupValidationMiddleware.js";

const router = Router();

router.post("/signup", signupValidation, signup);

export default router;
