import { signinSchema } from "../schemas/signinSchema.js";
import bcrypt from "bcrypt";
import { usersRepository } from "../repositories/usersRepository.js";

export async function signinValidation(req, res, next) {
  const { email, password } = req.body;

  const { error } = signinSchema.validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  try {
    const userWithThisEmail = await usersRepository.getUserWithThisEmail(email);
    
    if (!userWithThisEmail || !bcrypt.compareSync(password, userWithThisEmail.password)) {
      return res.status(401).send("Incorrect email or password");
    }

    res.locals.userId = userWithThisEmail.id;
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }

  next();
}
