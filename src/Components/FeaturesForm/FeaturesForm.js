import React from 'react';
import Feature from '../Feature/Feature';
import './FeaturesForm.css';

/*
The FeaturesForm Component returns a form that contains
individual Feature Components the user can interact with
*/
const FeaturesForm = (props) => {
  return (
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
};

export default FeaturesForm;

