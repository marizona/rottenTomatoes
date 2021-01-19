import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getReviewById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  });

  const id = req.query.id;

 if (req.method === "GET") {
      const get = await db.get("SELECT * FROM ratings WHERE id = ?", id);
      res.statusCode = 200;
      res.json(get);
    } else {
      res.statusCode = 404;
      res.json(null);
    }
  } 
