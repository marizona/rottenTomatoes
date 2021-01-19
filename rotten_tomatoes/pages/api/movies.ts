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
    const movies = await db.all(
      "select m.*,(select AVG(r.rating) from ratings as r  where id_movies = m.id) as 'rating' from movies as m "
    );
    res.statusCode = 200;
    res.json(movies);
  }
  
}
