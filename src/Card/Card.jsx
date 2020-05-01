import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ cardNumber, cardHolder, cardMonth, cardYear }) => (
  <div>
    <div className="card-number">{cardNumber}</div>
    <div className="card-holder">{cardHolder}</div>
    <div className="card-expires">{`${cardMonth}/${cardYear}`}</div>
  </div>
);

Card.propTypes = {
  cardNumber: PropTypes.string,
  cardHolder: PropTypes.string,
  cardMonth: PropTypes.string,
  cardYear: PropTypes.string,
};

Card.defaultProps = {
  cardNumber: '################',
  cardHolder: 'FULL NAME',
  cardMonth: 'MM',
  cardYear: 'YY',
};

export default Card;
