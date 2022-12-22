import { urlSchema } from "../schemas/urlSchema.js";
import { connection } from "../database/db.js";
import { nanoid } from "nanoid";
import { urlsRepository } from "../repositories/urlsRepository.js";

export async function postUrl(req, res) {
  const { url } = req.body;
  const userId = res.locals.userId;

  const { error } = urlSchema.validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  const shortUrl = nanoid(10);

  try {
    await urlsRepository.insertUrl(url, shortUrl, userId);

    res.status(201).send({ shortUrl: shortUrl });
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function getUrlById(req, res) {
  const { id } = req.params;

  try {
    const url = await urlsRepository.getUrlById(id);

    if (!url) return res.status(404).send("Could not find a URL with this id");

    res.status(200).send(url);
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function openUrl(req, res) {
  const { shortUrl } = req.params;

  try {
    const url = await urlsRepository.getUrlByShortened(shortUrl);

    if (!url) return res.status(404).send("Could not find this url");

    const urlId = url.id;

    await urlsRepository.updateUrl(urlId);

    res.redirect(url.url);
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function deleteUrl(req, res) {
  const { id } = req.params;

  try {
    await urlsRepository.deleteUrl(id);

    res.sendStatus(204);
  } catch (err) {
    res.status(500).send(err);
  }
}
