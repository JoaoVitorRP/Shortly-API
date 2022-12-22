import { connection } from "../database/db.js";

function insertUser(name, email, hashPassword) {
  return connection.query(
    `
    INSERT INTO
        users(name, email, password)
    VALUES
        ($1, $2, '${hashPassword}');
    `,
    [name, email]
  );
}

async function getUserWithThisEmail(email) {
  const userWithThisEmail = await connection.query(
    `
    SELECT *
    FROM
        users
    WHERE
        email = $1;
    `,
    [email]
  );

  return userWithThisEmail.rows[0];
}

async function getUserAndUrls(userId) {
  const userAndUrls = await connection.query(
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

  return userAndUrls.rows[0];
}

async function getRanking() {
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
  );

  return ranking.rows;
}

export const usersRepository = {
  insertUser,
  getUserWithThisEmail,
  getUserAndUrls,
  getRanking,
};
