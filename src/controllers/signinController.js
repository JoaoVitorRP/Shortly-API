import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function signin(req, res) {
  try {
    res.status(200).send({ token: jwt.sign({ userId: res.locals.userId }, process.env.JWT_KEY, { expiresIn: "1d" }) });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
