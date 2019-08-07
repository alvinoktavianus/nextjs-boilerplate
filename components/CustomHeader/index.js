import React from 'react';

const CustomHeader = props => (
  <React.Fragment>
    <h1>{props.title}</h1>
    <h6>{props.subtitle}</h6>
  </React.Fragment>
);

export default CustomHeader;
