import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getratings(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "GET") {
    const rating = await db.all(
      "select f.rating, (select title from movies where id = f.id_movies) as 'title',(select name from users where id = f.id_users) as 'name' from ratings as f "
    );
    res.json(rating);
  }
  }
