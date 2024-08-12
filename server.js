const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5001; // Change this to a different port number

app.use(cors());
app.use(express.json());

// Create a single instance of the MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'flashcard_db',
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Get all flashcards
app.get('/flashcards', (req, res) => {
  db.query('SELECT * FROM flashcards', (err, results) => {
    if (err) {
      console.error('Error fetching flashcards:', err);
      res.status(500).json({ error: 'Error fetching flashcards' });
      return;
    }
    res.json(results);
  });
});

// Add a flashcard
app.post('/flashcards', (req, res) => {
  const { question, answer } = req.body;
  db.query('INSERT INTO flashcards (question, answer) VALUES (?, ?)', [question, answer], (err, results) => {
    if (err) {
      console.error('Error adding flashcard:', err);
      res.status(500).json({ error: 'Error adding flashcard' });
      return;
    }
    res.json({ id: results.insertId, question, answer });
  });
});

// Update a flashcard
app.put('/flashcards/:id', (req, res) => {
  const { id } = req.params;
  const { question, answer } = req.body;
  db.query('UPDATE flashcards SET question = ?, answer = ? WHERE id = ?', [question, answer, id], (err) => {
    if (err) {
      console.error('Error updating flashcard:', err);
      res.status(500).json({ error: 'Error updating flashcard' });
      return;
    }
    res.sendStatus(200);
  });
});

// Delete a flashcard
app.delete('/flashcards/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM flashcards WHERE id = ?', [id], (err) => {
    if (err) {
      console.error('Error deleting flashcard:', err);
      res.status(500).json({ error: 'Error deleting flashcard' });
      return;
    }
    res.sendStatus(200);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
