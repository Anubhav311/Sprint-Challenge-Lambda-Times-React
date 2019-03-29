import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
          {props.cards.map((element, index) => (
            <Card headline={element.headline} img={element.img} author={element.author} key={index}/>
          ))}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.array
}

export default Cards;