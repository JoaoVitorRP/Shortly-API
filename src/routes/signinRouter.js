import { Router } from "express";
import { signin } from "../controllers/signinController.js";
import { signinValidation } from "../middlewares/signinValidationMiddleware.js";

const router = Router();

router.post("/signin", signinValidation, signin);

export default router;