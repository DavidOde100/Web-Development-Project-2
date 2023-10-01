import React, { useState } from 'react';
import '/src/QuizCard.css';

const QuizCard = ({ cardPairs, currentCardIndex, onNextClick, onBackClick }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const getCategoryClassName = () => {
    switch (cardPairs[currentCardIndex].category) {
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
    const currentCard = cardPairs[currentCardIndex];
    const userAnswer = userGuess.toLowerCase();
    const targetAnswer = currentCard.answer.toLowerCase();
    const isGuessCorrect = userAnswer.includes(targetAnswer) || targetAnswer.includes(userAnswer);
    
    setIsCorrect(isGuessCorrect);
    setSubmitted(true);
  };

  return (
    <div className={`quiz-card ${getCategoryClassName()}`} onClick={toggleAnswer}>
      {showAnswer ? (
        <>
          <h3>Answer:</h3>
          <p>{cardPairs[currentCardIndex].answer}</p>
          {submitted && (
            <p className={isCorrect ? 'correct' : 'incorrect'}>
              {isCorrect ? 'Correct!' : 'Incorrect!'}
            </p>
          )}
        </>
      ) : (
        <>
          <h3>Question:</h3>
          <p>{cardPairs[currentCardIndex].question}</p>
          {cardPairs[currentCardIndex].image && (
            <img src={cardPairs[currentCardIndex].image} alt="Card Image" />
          )}
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
      <div className="nav-buttons">
        <button className="back-button" onClick={onBackClick}>
          Back
        </button>
        <button className="next-button" onClick={onNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
