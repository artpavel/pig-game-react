import React from 'react';

const ViewDice = ({
  img,
  isPlaying,
  onRollDice,
  onNewGame,
  onRememberData,
}) => {
  return (
    <>
      {isPlaying && <img src={img} alt='Playing dice' className='dice' />}
      <button className='btn btn--new' onClick={onNewGame}>
        🔄 New game
      </button>
      <button className='btn btn--roll' onClick={onRollDice}>
        🎲 Roll dice
      </button>
      <button className='btn btn--hold' onClick={onRememberData}>
        📥 Hold
      </button>
    </>
  );
};

export default ViewDice;
