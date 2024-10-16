const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const PORT = 3000;

// CORS engedélyezése
app.use(cors());

// MySQL adatbázis kapcsolat beállítása
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'konyvtarkatalogus'
});

// Csatlakozás MySQL adatbázishoz
db.connect(err => {
  if (err) {
    console.error('Hiba a csatlakozáskor:', err);
    return;
  }
  console.log('Csatlakozva a MySQL adatbázishoz.');
});

// API végpont az adatok lekéréséhez
app.get('/books', (req, res) => {
  const sql = 'SELECT * FROM books';  // Az adatbázisban lévő tábla neve
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// Szerver indítása
app.listen(PORT, () => {
  console.log(`A szerver fut a ${PORT} porton.`);
});
