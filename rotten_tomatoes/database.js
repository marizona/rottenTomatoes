const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

(async () => {
    // open the database
    const db = await sqlite.open({
      filename: './rotten_tomatoes.sqlite',
      driver: sqlite3.Database
    });

    await db.migrate({force: true});
    const users = await db.all('select * from users');
    console.log(JSON.stringify(users, null, 4));

    const movies = await db.all('select * from movies');
    console.log(JSON.stringify(movies, null, 4));
})()
