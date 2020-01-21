import React from 'react';
import USCurrencyFormat from '../../USCurrencyFormat';
import './SummaryOption.css';

/*
The SummaryOption Component returns an individual list-item inside a Summary Component
*/
const SummaryOption = (props) => {
  return (
    <div className="summary__option">
      <div className="summary__option__label">{props.featureName} </div>
      <div className="summary__option__value">{props.optionName}</div>
      <div className="summary__option__cost">
        {USCurrencyFormat.format(props.optionCost)}
      </div>
    </div>
  );
};

export default SummaryOption;