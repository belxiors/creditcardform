import React from 'react';
import FormValue from './FormValue';
import './FormContainer.scss';
import Select from '../Select/Select';

const FormContainer = () => {
  const validYears = ['2020', '2021', '2022', '2023', '2024', '2025'];
  return (
    <div className="form-container">
      <form>
        <FormValue
          className="layout-1-1-4"
          labelText="Card Number"
          inputType="text"
        />
        <FormValue
          className="layout-2-1-4"
          labelText="Card Holder"
          inputType="text"
        />
        <Select
          className="layout-3-1-2"
          labelText="Expiration Date"
          placeholder="Month"
          options={Array.from({ length: 12 }, (v, k) => `${k + 1}`)}
        />
        <Select
          className="layout-3-2-3"
          placeholder="Year"
          options={validYears}
        />
        <FormValue
          className="form-value-3-3-4"
          labelText="CVV"
          inputType="text"
        />
      </form>
    </div>
  );
};

export default FormContainer;
