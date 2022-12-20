import { urlSchema } from "../schemas/urlSchema.js";
import { connection } from "../database/db.js";
import { nanoid } from "nanoid";

export async function postUrl(req, res) {
  const { url } = req.body;
  const userId = res.locals.userId;

  const { error } = urlSchema.validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);

  const shortUrl = nanoid(10);

  try {
    await connection.query(
        `
        INSERT INTO
            urls(url, "shortUrl", "createdBy")
        VALUES 
            ($1, '${shortUrl}', '${userId}');
        `,
      [url]
    );

    res.status(201).send({ shortUrl: shortUrl });
  } catch (err) {
    res.status(500).send(err);
  }
}
