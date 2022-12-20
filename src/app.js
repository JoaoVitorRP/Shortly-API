import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import signupRouter from "./routes/signupRouter.js";
import signinRouter from "./routes/signinRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(signupRouter);
app.use(signinRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port ${port}`));
