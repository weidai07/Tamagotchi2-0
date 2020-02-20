import React from 'react';
import Header from './Header';
import NewTamagotchiForm from './NewTamagotchiForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import Moment from 'moment';
import TamagotchiList from './TamagotchiList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTamagotchi: {}
    };
    this.handleAddingNewTamagotchi = this.handleAddingNewTamagotchi.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTamagotchiElapsedWaitTime(),
    5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTamagotchiElapsedWaitTime() {
    var newMasterTamagotchi = Object.assign({}, this.state.masterTamagotchi);
    Object.keys(newMasterTamagotchi).forEach(tamagotchiId => {
      newMasterTamagotchi[tamagotchiId].formattedWaitTime = (newMasterTamagotchi[tamagotchiId].timeOpen).fromNow(true);
    });
    this.setState({masterTamagotchi: newMasterTamagotchi});
  }

  handleAddingNewTamagotchi(newTamagotchi){
    var newTamagotchiId = v4();
    var newMasterTamagotchi = Object.assign({}, this.state.masterTamagotchi, {
      [newTamagotchiId]: newTamagotchi
    });
    newMasterTamagotchi[newTamagotchiId].formattedWaitTime = newMasterTamagotchi[newTamagotchiId].timeOpen.fromNow(true);
    this.setState({masterTamagotchi: newMasterTamagotchi});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TamagotchiList tamagotchiList={this.state.masterTamagotchi} />} />
          <Route path='/newtamagotchi' render={()=><NewTamagotchiForm onNewTamagotchiCreation={this.handleAddingNewTamagotchi} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
