import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = ({ className, labelText, placeholder, options }) => (
  <div className={`select ${className}`}>
    <label>{labelText}</label>
    <select placeholder={placeholder}>
      {options.map(function mapOptions(value) {
        return (
          <option key={value} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  </div>
);

Select.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

Select.defaultProps = {
  className: undefined,
  placeholder: '--',
  labelText: '',
  options: [],
};

export default Select;
