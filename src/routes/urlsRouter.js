import { Router } from "express";
import { postUrl } from "../controllers/urlsController.js";
import { tokenValidation } from "../middlewares/tokenValidationMiddleware.js";

const router = Router();

router.post("/urls/shorten", tokenValidation, postUrl);

export default router;