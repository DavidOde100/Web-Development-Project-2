import React, { useState } from 'react';
import '/src/QuizCard.css';

const QuizCard = ({ question, answer, image, category, onNextClick }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState(''); // To track user input
  const [isCorrect, setIsCorrect] = useState(null); // To track correctness
  const [submitted, setSubmitted] = useState(false); // To track submission

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

  const handleInputChange = (e) => {
    setUserGuess(e.target.value);
  };

  const handleSubmit = () => {
    // Check if the user's guess matches the answer
    const isGuessCorrect = userGuess.toLowerCase() === answer.toLowerCase();
    setIsCorrect(isGuessCorrect);
    setSubmitted(true);
  };

  return (
    <div className={`quiz-card ${getCategoryClassName()}`} onClick={toggleAnswer}>
      {showAnswer ? (
        <>
          <h3>Answer:</h3>
          <p>{answer}</p>
          {submitted && (
            <p className={isCorrect ? 'correct' : 'incorrect'}>
              {isCorrect ? 'Correct!' : 'Incorrect!'}
            </p>
          )}
        </>
      ) : (
        <>
          <h3>Question:</h3>
          <p>{question}</p>
          {image && <img src={image} alt="Card Image" />}
          {!submitted && (
            <div>
              <input
                type="text"
                placeholder="Enter your guess"
                value={userGuess}
                onChange={handleInputChange}
              />
              <button onClick={handleSubmit}>Submit</button>
            </div>
          )}
        </>
      )}
      <button onClick={onNextClick}>Next</button>
    </div>
  );
};

export default QuizCard;

