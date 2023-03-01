import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";

const app = express();

const PORT = 8000;

async function runQuery(query: string) {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database("./db/demo-data.sqlite", (dbErr) => {
      if (dbErr) {
        console.error(dbErr);
        reject(dbErr);
      }
      db.all(query, (err, rows) => {
        if (err) reject(err);
        db.close();
        resolve(rows);
      });
    });
  });
}

app.use(
  cors({
    origin: "*",
    methods: "*",
  })
);

app.get("/", (req, res) => {
  res.status(200).json({ sucess: true });
});

app.get("/users", async (req, res) => {
  try {
    const rows = await runQuery("select * from user");
    res.json(rows);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
