// CardSet.jsx
import React from 'react';
import '/src/CardSet.css';

const CardSet = ({ title, description, totalCards }) => {
  return (
    <div className="card-set">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Total Cards: {totalCards}</p>
    </div>
  );
};

export default CardSet;
