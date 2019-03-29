import React, { Component } from 'react';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map((element, index) => (
            <Card headline={element.headline} img={element.img} author={element.author} key={index}/>
          ))}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;