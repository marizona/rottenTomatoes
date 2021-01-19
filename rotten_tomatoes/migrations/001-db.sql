CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT,
    admin INTEGER
);
CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    summary TEXT,
    image TEXT,
    average FLOAT,
    date TEXT,
    genre TEXT,
    producer TEXT
);
CREATE TABLE IF NOT EXISTS favorites (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_users INTEGER,
    id_movies INTEGER,
    FOREIGN KEY (id_users) REFERENCES users(id),
    FOREIGN KEY (id_movies) REFERENCES movies(id)
);
CREATE TABLE IF NOT EXISTS ratings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    rating FLOAT,
    id_movies INTEGER,
    id_users INTEGER,
    FOREIGN KEY (id_movies) REFERENCES movies(id),
    FOREIGN KEY (id_users) REFERENCES users(id)
);
CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    review TEXT,
    id_movies INTEGER,
    id_users INTEGER,
    FOREIGN KEY (id_movies) REFERENCES movies(id),
    FOREIGN KEY (id_users) REFERENCES users(id)
);

-- DROP TABLE users;
-- DROP TABLE movies;
-- DROP TABLE ratings;
-- DROP TABLE reviews;
-- DROP TABLE favorites;