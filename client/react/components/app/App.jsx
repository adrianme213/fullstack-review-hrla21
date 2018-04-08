import React, { Component } from 'react';
import axios from 'axios';

import Navbar from '../navbar/Navbar';
import PlayerList from '../playerlist/PlayerList';
import PlayerForm from '../playerform/PlayerForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInState: true,
      navbarSelection: 'playerList',
      playerList: []
    };
    this.updateSelectedComponent = this.updateSelectedComponent.bind(this);
    this.updateLoggedInState = this.updateLoggedInState.bind(this);
    this.getAllPlayers = this.getAllPlayers.bind(this);
    this.updatePlayerList = this.updatePlayerList.bind(this);
  }

  // Lifecycle Hooks
  componentDidMount() {
    this.getAllPlayers();
  }

  // Navbar Helper Functions
  updateSelectedComponent(selection) {
    this.setState({ navbarSelection: selection });
  }
  updateLoggedInState() {
    this.setState({ loggedInState: !this.state.loggedInState }, () => {
      if (this.state.loggedInState) {
        this.updateSelectedComponent('playerList');
      }
    });
  }

  // More Helper Functions
  getAllPlayers() {
    axios.get('/api/playerlist')
      .then(response => this.updatePlayerList(response.data))
      .catch(err => console.log(err));
  }

  updatePlayerList(list) {
    this.setState({ playerList: list });
  }

  render() {
    return (
      <div>
        <Navbar
          navbarSelection={this.state.navbarSelection}
          loggedInState={this.state.loggedInState}
          updateLoggedInState={this.updateLoggedInState}
          updateSelectedComponent={this.updateSelectedComponent}/>
          {this.state.navbarSelection === 'playerList' ?
            <PlayerList playerList={this.state.playerList} />
          :
            <PlayerForm />
          }
      </div>
    );
  }

}

export default App;
