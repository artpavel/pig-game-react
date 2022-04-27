import React from 'react';

const ItemPlayer = props => {
  const { id, score, current, isActive } = props.data;

  const active = isActive ? 'player--active' : '';

  const finish = score >= 20 ? 'player--winner' : '';

  return (
    <section className={`player player--${id} ${active} ${finish}`}>
      <h2 className='name' id={`name--${id}`}>
        Player {id}
      </h2>
      <p className='score' id={`score--${id}`}>
        {score}
      </p>
      <div className='current'>
        <p className='current-label'>Current</p>
        <p className='current-score' id={`current--${id}`}>
          {current}
        </p>
      </div>
    </section>
  );
};

export default ItemPlayer;
