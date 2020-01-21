import React from 'react';
import Feature from '../Feature/Feature';
import './FeaturesForm.css';

const FeatureForm = props => (
  <form className="main__form">
    <h2>Customize your laptop</h2>
    {Object.keys(props.features).map((feature, idx) => (
      <Feature
        feature={props.features[feature]}
        featureName={feature}
        key={feature + '-' + idx}
        updateFeature={props.updateFeature}
        selectedFeature={props.selected[feature]}
      />
    ))}
  </form>
);

export default FeatureForm;

