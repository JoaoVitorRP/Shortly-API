import { connection } from "../database/db.js";

export async function signup(req, res) {
  const { name, email } = req.body;

  try {
    await connection.query(
      `
      INSERT INTO
        users(name, email, password)
      VALUES
        ('${name}', '${email}', '${res.locals.hashPassword}');
      `
    );

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err);
  }
}
