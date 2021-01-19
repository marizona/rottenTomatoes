import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function getfavorite(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "GET") {
    const favorite = await db.all(
      "select f.favorite, (select title from movies where id = f.id_movies) as 'title',(select name from users where id = f.id_users) as 'name' from favorites as f "
    );
    res.json(favorite);
  }
  }
