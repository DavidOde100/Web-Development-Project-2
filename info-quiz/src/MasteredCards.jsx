import React from 'react';

const MasteredCards = ({ masteredCards }) => {
  return (
    <div className="mastered-cards">
      <h2>Mastered Cards</h2>
      <ul>
        {masteredCards.map((card, index) => (
          <li key={index}>{card.question}</li>
        ))}
      </ul>
    </div>
  );
};

export default MasteredCards;
