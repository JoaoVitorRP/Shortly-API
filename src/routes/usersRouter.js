import { Router } from "express";
import { getRanking, getUser } from "../controllers/usersController.js";
import { tokenValidation } from "../middlewares/tokenValidationMiddleware.js";

const router = Router();

router.get("/users/me", tokenValidation, getUser);
router.get("/ranking", getRanking);

export default router;