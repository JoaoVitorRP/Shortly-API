import { usersRepository } from "../repositories/usersRepository.js";

export async function getUser(req, res) {
  const userId = res.locals.userId;

  try {
    const userAndUrls = await usersRepository.getUserAndUrls(userId);

    if (!userAndUrls) return res.status(404).send("Could not find the user");

    res.status(200).send(userAndUrls);
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function getRanking(req, res) {
  try {
    const ranking = await usersRepository.getRanking();

    res.status(200).send(ranking);
  } catch (err) {
    res.status(500).send(err);
  }
}
