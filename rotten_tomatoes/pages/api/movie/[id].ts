import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getMovieById(
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
      const put = await db.run(
        "UPDATE movies SET title= ?, summary = ?, image=?, average=? where id = ?",
        req.body.title,
        req.body.summary,
        req.body.image,
        req.body.rating,
        id
      );
      res.statusCode = 200;
      res.json(put);
    } else if (req.method === "DELETE") {
      await db.run("DELETE FROM movies WHERE id = ?", id);
      res.statusCode = 204;
      res.json(null);
    } else if (req.method === "GET") {
      const get = await db.get("SELECT m.* ,(select AVG(rating) from ratings where id_movies =  m.id) as 'rating'FROM movies as m WHERE id = ?", id);
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
