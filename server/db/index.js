const { pool, Pool } = require("pg");

const db = new Pool({
  host: "localhost",
  database: "tweeter",
  port: 5400,
  user: "verkeiafoley",
  password: "tweeter",
});

db.connect()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("Failed to connect to DB"));

module.exports = {
    query: (text) => db.query(text),
};
