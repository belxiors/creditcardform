import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ cardNumber, cardName, cardMonth, cardYear, cardCVV }) => (
  <div>
    <div className="card-number">{cardNumber || '################'}</div>
    <div className="card-holder">{cardName || 'FULL NAME'}</div>
    <div className="card-expires">
      {`${cardMonth || 'MM'}/${cardYear.slice(2) || 'YY'}`}
    </div>
    <div className="card-cvv">{cardCVV}</div>
  </div>
);

Card.propTypes = {
  cardNumber: PropTypes.string,
  cardName: PropTypes.string,
  cardMonth: PropTypes.string,
  cardYear: PropTypes.string,
  cardCVV: PropTypes.string,
};

Card.defaultProps = {
  cardNumber: '################',
  cardName: 'FULL NAME',
  cardMonth: 'MM',
  cardYear: 'YY',
  cardCVV: '',
};

export default Card;
