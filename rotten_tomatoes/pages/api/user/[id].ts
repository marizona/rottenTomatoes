import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { hash } from "bcrypt";

export default async function getUserById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  });

  const id = req.query.id;

  try {
    if (req.method === "PUT") {
      hash(req.body.password, 12, async function (err, hash) {
        const put = await db.run(
          "UPDATE users SET name= ?, email = ?, password = ?, admin=? where id = ?",
          req.body.name,
          req.body.email,
          hash,
          req.body.admin,
          id
        );
        res.statusCode = 200;
        res.json(put);
      });
    } else if (req.method === "DELETE") {
      await db.run("DELETE FROM users WHERE id = ?", id);
      res.statusCode = 204;
      res.json(null);
    } else if (req.method === "GET") {
      const get = await db.get("SELECT * FROM users WHERE id = ?", id);
      res.statusCode = 200;
      res.json(get);
    } else {
      res.statusCode = 404;
      res.json(null);
    }
  } catch (e) {
    console.log(e);
  }
}
