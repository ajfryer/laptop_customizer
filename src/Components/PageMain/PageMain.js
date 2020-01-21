import React from 'react';
import FeaturesForm from '../FeaturesForm/FeaturesForm';
import Summary from '../Summary/Summary'; 
import './PageMain.css';

/*
A PageMain component returns the page's <main> which contains
a FeaturesForm Component and a Summary Component
*/
const PageMain = (props) => {
  return (
    <main>
      <FeaturesForm
        features={props.features}
        updateFeature={props.updateFeature}
        selected={props.selected}
      />
      <Summary selected={props.selected} />
    </main>
  );
};

export default PageMain;