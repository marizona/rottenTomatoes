import { verify } from "jsonwebtoken";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { secret } from "../../api/secret";

export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.cookies.auth!, secret, async function (err, decoded) {
    if (!err && decoded) {
      return await fn(req, res);
    }
    res.status(401).json({ message: "Sorry you are not authenticated" });
  });
};

export default authenticated(async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  });
  const users = await db.all("SELECT id, email, name FROM users");

  res.json(users);
});
