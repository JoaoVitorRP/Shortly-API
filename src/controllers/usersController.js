import { connection } from "../database/db.js";

export async function getUser(req, res) {
  const userId = res.locals.userId;

  try {
    const userInfo = await connection.query(
        `
        SELECT
            users.id, users.name,
            SUM(urls."visitCount") AS "visitCount",
            ( 
                SELECT 
                    json_agg("urlRows")
                FROM (
                    SELECT
                        ur.id, ur."shortUrl", ur."url", ur."visitCount"
                    FROM
                        urls ur
                    WHERE
                        ur."createdBy" = $1
                )
                AS "urlRows"
            ) AS "shortenedUrls"
        FROM
            users
        LEFT JOIN
            urls
        ON
            users.id = urls."createdBy"
        WHERE
            users.id = $1
        GROUP BY
            users.id;
        `,
      [userId]
    );

    if (userInfo.rows.length === 0) return res.status(404).send("Could not find the user");

    res.status(200).send(userInfo.rows[0]);
  } catch (err) {
    res.status(500).send(err);
  }
}
