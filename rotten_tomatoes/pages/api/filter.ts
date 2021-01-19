import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getfilter(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "GET") {
    console.log(req);

    const date = req.query.date;
    const genre = req.query.genre;
    const producer = req.query.producer;

    
    const post = await db.all(
      `select * from movies where date = '${date}'
        or producer = '${producer}' 
        or genre = '${genre}'`
    );
    res.statusCode = 200;
    res.json(post);
  }
}
