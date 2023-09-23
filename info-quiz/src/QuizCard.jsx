// QuizCard.jsx
import React, { useState } from 'react';
import '/src/QuizCard.css';

const QuizCard = ({ question, answer, image, category, onNextClick }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  // Define CSS classes based on the category
  const getCategoryClassName = () => {
    switch (category) {
      case 'Difficulty: Easy':
        return 'easy-card';
      case 'Difficulty: Medium':
        return 'medium-card';
      case 'Difficulty: Hard':
        return 'hard-card';
      default:
        return '';
    }
  };

  return (
    <div className={`quiz-card ${getCategoryClassName()}`} onClick={toggleAnswer}>
      {showAnswer ? (
        <>
          <h3>Answer:</h3>
          <p>{answer}</p>
        </>
      ) : (
        <>
          <h3>Question:</h3>
          <p>{question}</p>
          {image && <img src={image} alt="Card Image" />}
        </>
      )}
      <button onClick={onNextClick}>Next</button>
    </div>
  );
};

export default QuizCard;
