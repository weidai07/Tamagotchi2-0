import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewTamagotchiForm(props){
  let _name = null;

  function handleNewTamagotchiFormSubmission(event) {
    event.preventDefault();
    props.onNewTamagotchiCreation({name: _name.value, hunger: 100, play: 100, rest: 100, status: 100, timeOpen: new Moment()});
    _name.value = '';
  }             

  return (
    <div>
      <form onSubmit={handleNewTamagotchiFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>          
        <button type='submit'>Confirm</button>       
      </form>
    </div>
  );
}

NewTamagotchiForm.propTypes = {
  onNewTamagotchiCreation: PropTypes.func
};

export default NewTamagotchiForm;
