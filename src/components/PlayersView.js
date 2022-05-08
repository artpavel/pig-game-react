import React from 'react';
import ItemPlayer from './Player';

const PlayersView = ({ players }) => (
  <>
    {players.map(item => (
      <ItemPlayer key={item.id} player={item} />
    ))}
  </>
);


export default PlayersView;
