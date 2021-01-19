import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getreviews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "GET") {
    const review = await db.all(
      "select f.review, (select title from movies where id = f.id_movies) as 'title',(select name from users where id = f.id_users) as 'name' from reviews as f "
    );
    res.json(review);
  }
}
