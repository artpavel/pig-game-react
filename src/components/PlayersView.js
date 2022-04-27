import React from 'react';
import ItemPlayer from './ItemPlayer';

const PlayerView = ({ dataPlayer }) => {
  const viewPlayers = dataPlayer.map(item => (
    <ItemPlayer key={item.id} data={item} />
  ));

  return <>{viewPlayers}</>;
};

export default PlayerView;
