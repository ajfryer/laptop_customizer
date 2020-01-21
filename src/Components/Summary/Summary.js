import React from 'react';
import SummaryOption from '../SummaryOption/SummaryOption';
import USCurrencyFormat from '../../USCurrencyFormat';
import './Summary.css';

const Summary = props => (
  <section className="main__summary">
    <h2>Your cart</h2>
    {Object.keys(props.selected).map((feature, idx) => (
      <SummaryOption
        key={feature + '-' + idx}
        featureName={feature}
        optionName={props.selected[feature].name}
        optionCost={props.selected[feature].cost}
      />
    ))}
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {USCurrencyFormat.format(
          Object.keys(props.selected).reduce(
            (acc, curr) => acc + props.selected[curr].cost,
            0
          )
        )}
      </div>
    </div>
  </section>
);

export default Summary;

