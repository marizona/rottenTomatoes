import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getmovies(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  });

  if (req.body.title != "") {
    const post = await db.run(
      "INSERT INTO movies (title, summary, image, average, date, genre, producer) VALUES (?,?,?,?,?,?,?) ",
      req.body.title,
      req.body.summary,
      req.body.image,
      req.body.average,
      req.body.date,
      req.body.genre,
      req.body.producer
    );
    res.statusCode = 200;
    res.json(post);
  }
}