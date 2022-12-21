import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import signupRouter from "./routes/signupRouter.js";
import signinRouter from "./routes/signinRouter.js";
import urlsRouter from "./routes/urlsRouter.js";
import usersRouter from "./routes/usersRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(signupRouter);
app.use(signinRouter);
app.use(urlsRouter);
app.use(usersRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running in port ${port}`));
