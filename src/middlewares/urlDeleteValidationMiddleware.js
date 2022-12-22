import { urlsRepository } from "../repositories/urlsRepository.js";

export async function urlDeleteValidation(req, res, next) {
  const { id } = req.params;
  const userId = res.locals.userId;

  try {
    const urlOwner = await urlsRepository.getUrlOwner(id);

    if (!urlOwner) return res.status(404).send("Could not find a url with this id");

    if (urlOwner !== userId) return res.status(401).send("This url does not belong to the user");
  } catch (err) {
    return res.status(500).send(err);
  }

  next();
}
