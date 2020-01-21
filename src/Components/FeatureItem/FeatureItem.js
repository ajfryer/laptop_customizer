import React from 'react';
import slugify from 'slugify';
import USCurrencyFormat from '../../USCurrencyFormat';
import './FeatureItem.css';

/*
A FeatureItem component returns a single form input and label
*/
const FeatureItem = (props) => {
  return (
    <div className="feature__item">
      <input
        type="radio"
        id={props.itemHash}
        className="feature__option"
        name={slugify(props.featureName)}
        checked={props.item.name === props.selectedFeature.name}
        onChange={e => props.updateFeature(props.featureName, props.item)}
      />
      <label htmlFor={props.itemHash} className="feature__label">
        {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
      </label>
    </div>
  );
};

export default FeatureItem;
