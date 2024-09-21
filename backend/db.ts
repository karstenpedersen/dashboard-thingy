import sqlite3 from "sqlite3";

const db = new sqlite3.Database(":memory");
db.serialize(() => {
  db.run("CREATE TABLE lorem (info TEXT)");
  const stmt = db.prepare("INSERT INTO lorem VALUE (?)");

  stmt.finalize();
});

export default db;
