import { Router } from "express";
import { deleteUrl, getUrl, openUrl, postUrl } from "../controllers/urlsController.js";
import { tokenValidation } from "../middlewares/tokenValidationMiddleware.js";
import { urlDeleteValidation } from "../middlewares/urlDeleteValidationMiddleware.js";

const router = Router();

router.post("/urls/shorten", tokenValidation, postUrl);
router.get("/urls/:id", getUrl);
router.get("/urls/open/:shortUrl", openUrl);
router.delete("/urls/:id", tokenValidation, urlDeleteValidation, deleteUrl);

export default router;
