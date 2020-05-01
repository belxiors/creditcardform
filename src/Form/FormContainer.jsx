import React from 'react';
import PropTypes from 'prop-types';
import FormValue from './FormValue';
import './FormContainer.scss';
import Select from '../Select/Select';

const FormContainer = ({
  cardNumber,
  setCardNumber,
  cardName,
  setCardName,
  cardCVV,
  setCardCVV,
  cardMonth,
  setCardMonth,
  cardYear,
  setCardYear,
}) => {
  const validYears = ['2020', '2021', '2022', '2023', '2024', '2025'];
  return (
    <div className="form-container">
      <form>
        <FormValue
          className="layout-1-1-4"
          labelText="Card Number"
          inputType="text"
          value={cardNumber}
          onChange={setCardNumber}
        />
        <FormValue
          className="layout-2-1-4"
          labelText="Card Holder"
          inputType="text"
          value={cardName}
          onChange={setCardName}
        />
        <Select
          className="layout-3-1-2"
          labelText="Expiration Date"
          placeholder="Month"
          options={Array.from({ length: 12 }, (v, k) => `${k + 1}`)}
          value={cardMonth}
          onSelect={setCardMonth}
        />
        <Select
          className="layout-3-2-3"
          placeholder="Year"
          options={validYears}
          value={cardYear}
          onSelect={setCardYear}
        />
        <FormValue
          className="form-value-3-3-4"
          labelText="CVV"
          inputType="text"
          value={cardCVV}
          onChange={setCardCVV}
        />
      </form>
    </div>
  );
};

FormContainer.propTypes = {
  cardNumber: PropTypes.string,
  cardName: PropTypes.string,
  cardMonth: PropTypes.string,
  cardYear: PropTypes.string,
  cardCVV: PropTypes.string,
  setCardNumber: PropTypes.func.isRequired,
  setCardName: PropTypes.func.isRequired,
  setCardMonth: PropTypes.func.isRequired,
  setCardYear: PropTypes.func.isRequired,
  setCardCVV: PropTypes.func.isRequired,
};

FormContainer.defaultProps = {
  cardNumber: '',
  cardName: '',
  cardMonth: '',
  cardYear: '',
  cardCVV: '',
};

export default FormContainer;
