import React from 'react';
import PropTypes from 'prop-types';

function Tamagotchi(props){
  return (
    <div>
      <h3>{props.name} - {props.hunger}</h3>
      <h4>{props.play} {props.rest}</h4>
      <p><em>{props.status} {props.formattedWaitTime}</em></p>
      <hr/>
    </div>
  );
}

Tamagotchi.propTypes = {
  name: PropTypes.string,
  hunger: PropTypes.string,
  play: PropTypes.number,
  rest: PropTypes.number,
  status: PropTypes.number,
  formattedWaitTime: PropTypes.string,
  tamagotchiId: PropTypes.string
  // formattedWaitTime: PropTypes.string.isRequired,
};

export default Tamagotchi;
