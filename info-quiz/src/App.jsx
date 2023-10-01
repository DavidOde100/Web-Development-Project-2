// App.jsx
import React, { useState } from 'react';
import './App.css';
import CardSet from '/src/CardSet';
import QuizCard from '/src/QuizCard';
import MasteredCards from '/src/MasteredCards';

const App = () => {
  const cardSetData = {
    title: 'Politics',
    description: 'Test your knowledge about political topics.',
    totalCards: 10, // Change the total number of cards as needed
  };

  // Define an array of card pairs, each containing a question, answer, category, and optional image
  const initialCardPairs = [
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

  const [cardPairs, setCardPairs] = useState(initialCardPairs);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]); // Array to store mastered cards
  const [streak, setStreak] = useState(0); // Current streak
  const [longestStreak, setLongestStreak] = useState(0); // Longest streak

  const handleNextClick = () => {
    const nextIndex = (currentCardIndex + 1) % cardPairs.length;
    setCurrentCardIndex(nextIndex);
  };

  const handleBackClick = () => {
    const previousIndex =
      currentCardIndex === 0 ? cardPairs.length - 1 : currentCardIndex - 1;
    setCurrentCardIndex(previousIndex);
  };

  const shuffleCards = () => {
    // Shuffle the cards randomly
    const shuffledCards = [...cardPairs];
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }
    setCardPairs(shuffledCards);
  };

  const handleMarkMastered = () => {
    // Add the current card to the list of mastered cards and remove it from the pool
    const currentCard = cardPairs[currentCardIndex];
    setMasteredCards([...masteredCards, currentCard]);
    const updatedCardPairs = cardPairs.filter((_, index) => index !== currentCardIndex);
    setCardPairs(updatedCardPairs);
    handleNextClick(); // Move to the next card
  };

  const handleCorrectAnswer = () => {
    // Handle correct answer for streak counting
    setStreak(streak + 1);
    if (streak + 1 > longestStreak) {
      setLongestStreak(streak + 1);
    }
  };

  const handleIncorrectAnswer = () => {
    // Handle incorrect answer for streak counting
    setStreak(0);
  };

  const currentCard = cardPairs[currentCardIndex];

  return (
    <div className="App">
      <CardSet {...cardSetData} />
      <div className="controls">
        <button onClick={handleBackClick} disabled={currentCardIndex === 0}>
          Back
        </button>
        <button onClick={shuffleCards}>Shuffle</button>
        <button onClick={handleNextClick} disabled={currentCardIndex === cardPairs.length - 1}>
          Next
        </button>
        <button onClick={handleMarkMastered}>Mark as Mastered</button>
      </div>
      <MasteredCards masteredCards={masteredCards} />
      <div className="streak-counter">
        <p>Current Streak: {streak}</p>
        <p>Longest Streak: {longestStreak}</p>
      </div>
      <QuizCard
        cardPairs={cardPairs}
        currentCardIndex={currentCardIndex}
        onNextClick={() => {
          handleNextClick();
          handleCorrectAnswer();
        }}
        onBackClick={() => {
          handleBackClick();
          handleIncorrectAnswer();
        }}
      />
    </div>
  );
};

export default App;