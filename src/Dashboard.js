import React, { useState } from 'react';

const Dashboard = ({ flashcards, addFlashcard, editFlashcard, deleteFlashcard }) => {
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      editFlashcard(editingId, { question: newQuestion, answer: newAnswer });
      setEditingId(null);
    } else {
      addFlashcard({ question: newQuestion, answer: newAnswer });
    }
    setNewQuestion('');
    setNewAnswer('');
  };

  const startEditing = (card) => {
    setEditingId(card.id);
    setNewQuestion(card.question);
    setNewAnswer(card.answer);
  };

  return (
    <div className="dashboard">
      <h2>Flashcard Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          required
        />
        <button type="submit">{editingId ? 'Update Flashcard' : 'Add Flashcard'}</button>
      </form>
      <ul>
        {flashcards.map((card) => (
          <li key={card.id}>
            {card.question} - {card.answer}
            <button onClick={() => startEditing(card)}>Edit</button>
            <button onClick={() => deleteFlashcard(card.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
