import React from 'react';
import Tamagotchi from './Tamagotchi';
import PropTypes from 'prop-types';

function TamagotchiList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.tamagotchiList).map(function(tamagotchiId) {
        var tamagotchi = props.tamagotchiList[tamagotchiId];
        return <Tamagotchi name={tamagotchi.name}
          hunger={tamagotchi.hunger}
          play={tamagotchi.play}
          rest={tamagotchi.rest}
          status={tamagotchi.status}
          formattedWaitTime={tamagotchi.formattedWaitTime}
          key={tamagotchiId}
          tamagotchiId={tamagotchiId}/>;
      })}
    </div>
  );
}

TamagotchiList.propTypes = {
  tamagotchiList: PropTypes.object
};

export default TamagotchiList;
