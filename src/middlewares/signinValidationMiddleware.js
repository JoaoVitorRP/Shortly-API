import { connection } from "../database/db.js";
import { signinSchema } from "../schemas/signinSchema.js";
import bcrypt from "bcrypt";

export async function signinValidation(req, res, next) {
  const { email, password } = req.body;

  const { error } = signinSchema.validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  try {
    const userWithThisEmail = await connection.query(`SELECT * FROM users WHERE email = '${email}'`);
    if (userWithThisEmail.rows.length === 0 || !bcrypt.compareSync(password, userWithThisEmail.rows[0].password)) {
      return res.status(401).send("Incorrect email or password");
    }

    res.locals.userId = userWithThisEmail.rows[0].id;
  } catch (err) {
    return res.status(500).send(err);
  }

  next();
}
