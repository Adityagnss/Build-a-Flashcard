// import React, { useState } from 'react';
// import FlashcardContainer from './FlashcardContainer';
// import Dashboard from './Dashboard';

// const App = () => {
//   const [flashcards, setFlashcards] = useState([
//     { id: 1, question: 'What is React?', answer: 'A JavaScript library for building user interfaces' },
//     { id: 2, question: 'What is JSX?', answer: 'A syntax extension for JavaScript used with React' },
//   ]);

//   const [showDashboard, setShowDashboard] = useState(false);

//   const addFlashcard = (newFlashcard) => {
//     setFlashcards([...flashcards, { ...newFlashcard, id: Date.now() }]);
//   };

//   const editFlashcard = (id, updatedFlashcard) => {
//     setFlashcards(flashcards.map(card => card.id === id ? { ...card, ...updatedFlashcard } : card));
//   };

//   const deleteFlashcard = (id) => {
//     setFlashcards(flashcards.filter(card => card.id !== id));
//   };

//   return (
//     <div className="App">
//       <h1>Flashcard Learning Tool</h1>
//       <button onClick={() => setShowDashboard(!showDashboard)}>
//         {showDashboard ? 'Show Flashcards' : 'Show Dashboard'}
//       </button>
//       {showDashboard ? (
//         <Dashboard
//           flashcards={flashcards}
//           addFlashcard={addFlashcard}
//           editFlashcard={editFlashcard}
//           deleteFlashcard={deleteFlashcard}
//         />
//       ) : (
//         <FlashcardContainer flashcards={flashcards} />
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import FlashcardContainer from './FlashcardContainer';
import Dashboard from './Dashboard';

const App = () => {
  const [flashcards, setFlashcards] = useState([
    { id: 1, question: 'What is React?', answer: 'A JavaScript library for building user interfaces' },
    { id: 2, question: 'What is JSX?', answer: 'A syntax extension for JavaScript used with React' },
  ]);

  const [showDashboard, setShowDashboard] = useState(false);

  const addFlashcard = (newFlashcard) => {
    setFlashcards([...flashcards, { ...newFlashcard, id: Date.now() }]);
  };

  const editFlashcard = (id, updatedFlashcard) => {
    setFlashcards(flashcards.map(card => card.id === id ? { ...card, ...updatedFlashcard } : card));
  };

  const deleteFlashcard = (id) => {
    setFlashcards(flashcards.filter(card => card.id !== id));
  };

  return (
    <div className="App">
      <h1>Flashcard Learning Tool</h1>
      {/* This is where the button should be */}
      <button className="btn" onClick={() => setShowDashboard(!showDashboard)}>
        {showDashboard ? 'Show Flashcards' : 'Show Dashboard'}
      </button>
      {showDashboard ? (
        <Dashboard
          flashcards={flashcards}
          addFlashcard={addFlashcard}
          editFlashcard={editFlashcard}
          deleteFlashcard={deleteFlashcard}
        />
      ) : (
        <div className="flashcard-section">
          <FlashcardContainer flashcards={flashcards} />
        </div>
      )}
    </div>
  );
};

export default App;