import React from 'react';

import PlayerEntry from '../playerentry/PlayerEntry';

const PlayerList = ({ playerList }) => {
  return playerList.length < 1 ? (<div>Empty List</div>) :
  (
    <div>
      {playerList.map(player => <PlayerEntry player={player} key={player._id} />)}
    </div>
  );
}

export default PlayerList;
