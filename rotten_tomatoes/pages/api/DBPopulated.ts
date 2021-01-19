import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { NextApiRequest, NextApiResponse } from "next";

export default async function populateDbWithMovies(req: NextApiRequest, res: NextApiResponse) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  }); 

  if (req.method === "POST") {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=a515f43d910a4f833a9f4d101312ae92&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    const movies = data.results;
    const slicedMovies = movies.slice(0, 15);

    const settledMovies = slicedMovies.map(
      (movie: {
        title: any;
        overview: any;
        release_date: any;
        poster_path: any;
      }) => {
        return [
          movie.title,
          movie.overview,
          movie.release_date,
          movie.poster_path,
        ];
      }
    );

    const flatMovies: any[] = [];
    settledMovies.forEach((movie: any[]) => {
      movie.forEach((element: any) => {
        flatMovies.push(element);
      });
    });

    let placeholders = slicedMovies
      .map((movie: any) => "(?, ?, ?, ?)")
      .join(",");
    let sql =
      "INSERT INTO movies(title, summary, date, image) VALUES " +
      placeholders;
    console.log(sql);
    try {
      const result = await db.run(sql, flatMovies);
      db.close();
      res.status(200).json({ message: "DB populated" });
    } catch (e) {
      res.status(405).json({ message: e });
    }
  } else {
    res.status(405).json({ message: "ERROR 405" });
  }
}
