import { signupSchema } from "../schemas/signupSchema.js";
import bcrypt from "bcrypt";
import { usersRepository } from "../repositories/usersRepository.js";

export async function signupValidation(req, res, next) {
  const { email, password, confirmPassword } = req.body;

  const { error } = signupSchema.validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  if (password !== confirmPassword)
    return res.status(401).send("Password confirmation must match the selected password");

  res.locals.hashPassword = bcrypt.hashSync(password, 10);

  try {
    const userWithThisEmail = await usersRepository.getUserWithThisEmail(email);

    if (userWithThisEmail) return res.sendStatus(409);
  } catch (err) {
    return res.status(500).send(err);
  }

  next();
}
