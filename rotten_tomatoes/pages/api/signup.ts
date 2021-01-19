import { hash } from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "POST") {
    hash(req.body.password, 10, async function (err, hash) {
      const statement = await db.prepare(
        "INSERT INTO users (name, email, password) values (?, ?, ?)"
      );
      const result = await statement.run(req.body.name, req.body.email, hash);
      // result.finalize();

      const user = await db.all("SELECT * FROM users");
      res.json(user);
    });
  } else {
    res.status(405).json({ message: "ERROR" });
  }
}
