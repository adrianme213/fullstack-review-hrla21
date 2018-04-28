import React from 'react';

const PlayerEntry = ({player}) => (
  <div>
    {player.firstName} {player.lastName}
  </div>
);

export default PlayerEntry;
