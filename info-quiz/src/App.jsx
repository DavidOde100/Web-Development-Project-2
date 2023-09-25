// App.jsx
import React, { useState } from 'react';
import './App.css';
import CardSet from '/src/CardSet';
import QuizCard from '/src/QuizCard';

const App = () => {
  const cardSetData = {
    title: 'Politics',
    description: 'Test your knowledge about political topics.',
    totalCards: 10, // Change the total number of cards as needed
  };

  // Define an array of card pairs, each containing a question, answer, category, and optional image
  const cardPairs = [
    {
      question: 'How much Thermo Fisher Scientific stock does Dr. Oz own?',
      answer: 'Dr. Oz owns approximately $2 million worth of Thermo Fisher Scientific stock.',
      category: 'Difficulty: Medium',
      image: 'src/img/Dr. Oz.png', // Add an image URL or leave it empty if there's no image
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
      image: 'src/img/EiffelTower.png', // Add an image URL or leave it empty if there's no image
    },
    {
      question: 'What is the main function of the executive branch in a presidential system of government?',
      answer: 'The main function of the executive branch is to enforce and implement laws.',
      category: 'Difficulty: Medium',
      image: 'src/img/EiffelTower.png', // Add an image URL or leave it empty if there's no image
    },
    {
      question: 'In the United States, how long is a term for a member of the House of Representatives?',
      answer: 'A term for a member of the House of Representatives is 2 years.',
      category: 'Difficulty: Hard',
      image: '', // Add an image URL or leave it empty if there's no image
    },
    {
      question: "What is a filibuster in the context of the U.S. Senate, and how does it work?",
      answer: "A filibuster is a tactic used in the U.S. Senate to delay or block legislation by speaking for an extended period. It can be ended by a three-fifths majority vote for cloture.",
      category: "Difficulty: Hard",
      image: "",
    },    
    {
      question: "Name two countries that have a parliamentary system of government.",
      answer: "Two countries with parliamentary systems are the United Kingdom and Canada.",
      category: "Difficulty: Easy",
      image: "",
    },    
    {
      question: "What is the concept of gerrymandering in the context of U.S. politics, and how does it impact elections?",
      answer: "Gerrymandering is the manipulation of electoral district boundaries to favor one political party. It can lead to unequal representation and distorted election results.",
      category: "Difficulty: Medium",
      image: "",
    },    
    {
      question: "What is the significance of the United Nations (UN) in global politics, and which city is its headquarters located in?",
      answer: "The United Nations plays a crucial role in promoting international cooperation and peace. Its headquarters is located in New York City, USA.",
      category: "Difficulty: Easy",
      image: "",
    },    
    {
      question: "Explain the term 'checks and balances' in the context of the U.S. government system.",
      answer: "'Checks and balances' refers to the system in which each branch of government (executive, legislative, and judicial) has the power to limit the actions of the other branches, preventing any one branch from becoming too powerful.",
      category: "Difficulty: Medium",
      image: "",
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


