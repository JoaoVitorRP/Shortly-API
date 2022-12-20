import { Router } from "express";
import { getUrl, openUrl, postUrl } from "../controllers/urlsController.js";
import { tokenValidation } from "../middlewares/tokenValidationMiddleware.js";

const router = Router();

router.post("/urls/shorten", tokenValidation, postUrl);
router.get("/urls/:id", getUrl);
router.get("/urls/open/:shortUrl", openUrl);

export default router;
