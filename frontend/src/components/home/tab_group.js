import React from 'react';
import ServiceStep from './step.js';

const TabGroup = ({data}) => {
  var  { buttonText, steps, image } = data;
  return (
    <div>
      <ServiceStep
        image={image}
        steps={steps}

        buttonText={buttonText}
      />
</div>

  );
};

export default TabGroup;
