import { compare } from "bcrypt";
import cookie from "cookie";
import { sign } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { secret } from "../../api/secret";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const db = await open({
    filename: "./rotten_tomatoes.sqlite",
    driver: sqlite3.Database,
  });

  if (req.method === "POST") {
    const user = await db.get("SELECT * FROM users WHERE email = ?", [
      req.body.email,
    ]);

    compare(req.body.password, user.password, function (err, result) {
      if (!err && result) {
        const claims = { sub: user.id, myUserEmail: user.email };
        const jwt = sign(claims, secret, { expiresIn: "1h" });

        res.setHeader(
          "Set-Cookie",
          cookie.serialize("auth", jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: 3600,
            path: "/",
          })
        );
        res.json({ message: "Logged in successfully" });
      } else {
        res.json({ message: "Oops, something went wrong!" });
      }
    });
  } else {
    res.status(405).json({ message: "ERROR" });
  }
}
