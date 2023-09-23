// App.jsx
import React, { useState } from 'react';
import './App.css';
import CardSet from '/src/CardSet';
import QuizCard from '/src/QuizCard';

const App = () => {
  const cardSetData = {
    title: 'Politics',
    description: 'Test your knowledge about political topics.',
    totalCards: 3, // Change the total number of cards as needed
  };

  // Define an array of card pairs, each containing a question, answer, category, and optional image
  const cardPairs = [
    {
      question: 'How much Thermo Fisher Scientific stock does Dr. Oz own?',
      answer: 'Dr. Oz owns approximately $2 million worth of Thermo Fisher Scientific stock.',
      category: 'Difficulty: Medium',
      image: 'image_url_here.jpg', // Add an image URL or leave it empty if there's no image
    },
    {
      question: 'Who is the current President of the United States?',
      answer: 'The current President of the United States is Joe Biden.',
      category: 'Difficulty: Easy',
      // No image for this card
    },
    {
      question: 'What is the capital of France?',
      answer: 'The capital of France is Paris.',
      category: 'Difficulty: Hard',
      image: 'image_url_here.jpg', // Add an image URL or leave it empty if there's no image
    },
    // Add more card pairs here as needed
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextClick = () => {
    const randomIndex = Math.floor(Math.random() * cardPairs.length);
    if (randomIndex !== currentCardIndex) {
      setCurrentCardIndex(randomIndex);
    } else {
      handleNextClick();
    }
  };

  const currentCard = cardPairs[currentCardIndex];

  return (
    <div className="App">
      <CardSet {...cardSetData} />
      <QuizCard {...currentCard} onNextClick={handleNextClick} />
    </div>
  );
};

export default App;


