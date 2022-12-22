import { usersRepository } from "../repositories/usersRepository.js";

export async function signup(req, res) {
  const { name, email } = req.body;

  try {
    await usersRepository.insertUser(name, email, res.locals.hashPassword);

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err);
  }
}
