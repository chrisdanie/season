import React from 'react';

const Spinner =props => {
  return (
    <div className="ui active ">
      <div className="ui big text loader dimmer">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;
