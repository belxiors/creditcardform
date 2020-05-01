import React from 'react';
import PropTypes from 'prop-types';
import './FormValue.scss';

const FormValue = ({ labelText, inputType, placeholder, className }) => (
  <div className={`form-value ${className}`}>
    <label>{labelText}</label>
    <input className="form-input" type={inputType} placeholder={placeholder} />
  </div>
);

FormValue.propTypes = {
  labelText: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

FormValue.defaultProps = {
  labelText: undefined,
  inputType: undefined,
  placeholder: undefined,
  className: 'form-value',
};

export default FormValue;
