import React, { useState } from 'react';
import './App.css';
import FormContainer from './Form/FormContainer';
import Card from './Card/Card';

const App = () => {
  const [cardName, setCardName] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [cardMonth, setCardMonth] = useState();
  const [cardYear, setCardYear] = useState();
  const [cardCVV, setCardCVV] = useState();
  const cardData = { cardName, cardNumber, cardMonth, cardYear, cardCVV };
  const cardSetters = {
    setCardName,
    setCardNumber,
    setCardMonth,
    setCardYear,
    setCardCVV,
  };
  return (
    <div className="app">
      <Card {...cardData} />
      <FormContainer {...cardData} {...cardSetters} />
    </div>
  );
};

export default App;
