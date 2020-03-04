import React from 'react';

const Spinner = props => {
  return (
    <div className="ui active inverted dimmer">
      <div class="ui big text loader">
        {props.message}
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;