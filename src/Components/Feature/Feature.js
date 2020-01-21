import React from 'react';
import slugify from 'slugify';
import FeatureItem from '../FeatureItem/FeatureItem';
import './Feature.css';

/*
A Feature Component returns a <fieldset> that contains 
individual FeatureItem Components the user can click on.
*/
const Feature = (props) => {
  return (
    <fieldset className="feature">
      <legend className="feature__name">
        <h3>{props.featureName}</h3>
      </legend>
      {props.feature.map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <FeatureItem
            item={item}
            key={itemHash}
            itemHash={itemHash}
            featureName={props.featureName}
            selectedFeature={props.selectedFeature}
            updateFeature={props.updateFeature}
          />
        );
      })}
    </fieldset>
  );
};

export default Feature;
