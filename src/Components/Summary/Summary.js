import React from 'react';
import SummaryOption from '../SummaryOption/SummaryOption';
import SummaryTotal from '../SummaryTotal/SummaryTotal';
import './Summary.css';

/*
The Summary Component returns several SummaryOption Components
and a SummaryTotal Component
*/
const Summary = (props) => {
  return (
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
      <SummaryTotal selected={props.selected} />
    </section>
  );
};

export default Summary;

