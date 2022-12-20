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

export async function getUrl(req, res) {
  const { id } = req.params;

  try {
    const url = await connection.query(
        `
        SELECT id, "shortUrl", url FROM
            urls
        WHERE id = $1;
        `,
      [id]
    );

    if (url.rows.length === 0) return res.status(404).send("Could not find a URL with this id");
    res.status(200).send(url.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

export async function openUrl(req, res) {
  const { shortUrl } = req.params;

  try {
    const urlInfo = await connection.query(
        `
        SELECT id, url FROM
            urls
        WHERE
            "shortUrl" = $1;
        `,
      [shortUrl]
    );

    if (urlInfo.rows.length === 0) return res.status(404).send("Could not find this url");

    const urlId = urlInfo.rows[0].id;

    await connection.query(
        `
        UPDATE
            urls
        SET
            "visitCount" = "visitCount" + 1
        WHERE
            id = $1;
        `,
      [urlId]
    );

    res.redirect(urlInfo.rows[0].url);
  } catch (err) {
    res.status(500).send(err);
  }
}

export async function deleteUrl(req, res) {
  const { id } = req.params;

  try {
    await connection.query(
        `
        DELETE FROM
            urls
        WHERE
            id = $1;
        `,
      [id]
    );

    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
