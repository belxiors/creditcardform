import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = ({
  className,
  labelText,
  placeholder,
  options,
  value,
  onSelect,
}) => (
  <div className={`select ${className}`}>
    <label htmlFor="selector">{labelText}</label>
    <select
      className="selector"
      placeholder={placeholder}
      value={value}
      onChange={e => onSelect(e.target.value)}
    >
      {options.map(function mapOptions(option) {
        return (
          <option key={option} value={option}>
            {option}
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
  value: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
};

Select.defaultProps = {
  className: undefined,
  placeholder: '--',
  labelText: '',
  options: [],
  value: '',
};

export default Select;
