import React from 'react';
import PropTypes from 'prop-types';
import './FormValue.scss';

const FormValue = ({
  labelText,
  inputType,
  placeholder,
  className,
  onChange,
  value,
}) => (
  <div className={`form-value ${className}`}>
    <label htmlFor="form-input">{labelText}</label>
    <input
      className="form-input"
      type={inputType}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      value={value}
    />
  </div>
);

FormValue.propTypes = {
  labelText: PropTypes.string,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

FormValue.defaultProps = {
  labelText: undefined,
  inputType: undefined,
  placeholder: undefined,
  className: 'form-value',
  value: '',
};

export default FormValue;
