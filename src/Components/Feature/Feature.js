import React from 'react';
import slugify from 'slugify';
import FeatureItem from '../FeatureItem/FeatureItem';
import './Feature.css';

const Feature = props => (
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

export default Feature;
