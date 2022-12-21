import { connection } from "../database/db.js";

export async function getUser(req, res) {
  const userId = res.locals.userId;

  try {
    const userInfo = await connection.query(
        `
        SELECT
            users.id, users.name,
            COALESCE(SUM(urls."visitCount"), 0) AS "visitCount",
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
                ) AS "urlRows"
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

export async function getRanking(req, res) {
  try {
    const ranking = await connection.query(
        `
        SELECT
            users.id, users.name,
            COUNT(urls."createdBy") AS "linksCount",
            COALESCE(SUM(urls."visitCount"), 0) AS "visitCount"
        FROM
            users
        LEFT JOIN
            urls
        ON
            users.id = urls."createdBy"
        GROUP BY
            users.id
        ORDER BY
            "visitCount" DESC, "linksCount" DESC, users.id ASC
        LIMIT 10;
        `
    )

    res.status(200).send(ranking.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}
