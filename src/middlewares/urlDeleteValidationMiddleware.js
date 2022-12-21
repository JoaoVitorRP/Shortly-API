import { connection } from "../database/db.js";

export async function urlDeleteValidation(req, res, next) {
  const { id } = req.params;
  const userId = res.locals.userId;

  try {
    const urlInfo = await connection.query(
        `
        SELECT "createdBy" FROM
            urls
        WHERE
            id = $1;
        `,
      [id]
    );

    if (urlInfo.rows.length === 0) return res.status(404).send("Could not find a url with this id");

    if (urlInfo.rows[0].createdBy !== userId) return res.status(401).send("This url does not belong to the user");
  } catch (err) {
    return res.status(500).send(err);
  }

  next();
}
