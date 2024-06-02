import React from 'react';
import './Card.css';

function Card({ img, header, subheader, text, ul }) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={img} alt={subheader} />
      </div>
      <div className="card-content">
        <h1 className="card-header">{header}</h1>
        <h2 className="card-subheader">{subheader}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;
