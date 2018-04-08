import React from 'react';

const Navbar = ({navbarSelection, updateSelectedComponent, updateLoggedInState, loggedInState}) => {
  const playerListClasses = (navbarSelection === 'playerList' ? 'item active' : 'item');
  const submitPlayerClasses = (navbarSelection === 'submitPlayer' ? 'item active' : 'item');
  const loggedInText = (loggedInState ? 'Login' : 'Logout');
  return (
  <div>
    <div className="ui secondary  menu">
      <a className={playerListClasses} onClick={() => updateSelectedComponent('playerList')}>Player List</a>
      <a className={submitPlayerClasses} onClick={() => updateSelectedComponent('submitPlayer')}>Submit a Player</a>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
          </div>
        </div>
        <a className="ui item" onClick={() => updateLoggedInState()}>{loggedInText}</a>
      </div>
    </div>
  </div>
  );
}

export default Navbar;
