import './App.css';
import React, { useState } from 'react';
import icon0 from './components/img/dice-1.png';
import icon1 from './components/img/dice-2.png';
import icon2 from './components/img/dice-3.png';
import icon3 from './components/img/dice-4.png';
import icon4 from './components/img/dice-5.png';
import icon5 from './components/img/dice-6.png';
import PlayersView from './components/PlayersView';
import ViewDice from './components/ViewDice';

const dataPlayer = [
  {
    id: 1,
    score: 0,
    current: 0,
    isActive: true,
    isFinish: false,
  },
  {
    id: 2,
    score: 0,
    current: 0,
    isActive: false,
    isFinish: false,
  },
];

const myIMG = [icon0, icon1, icon2, icon3, icon4, icon5];

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [dice, setDice] = useState(0);
  const [player, setPlayer] = useState(dataPlayer);

  const onStartRollDice = () => {
    setIsPlaying(true);
    const random = Math.trunc(Math.random() * 6) + 1;

    if (random === 1) {
      checkWhenOne();
      console.log('<< random >>: ', player);
    }

    addCurrent(random);
    setDice(random);
  };

  // add current
  const addCurrent = val => {
    const newPlayer = player.map(item =>
      item.isActive === true ? { ...item, current: item.current + val } : item
    );
    setPlayer(newPlayer);
  };

  // hold button
  const rememberData = () => {
    checkIsActive();
    setIsPlaying(false);
  };

  // check isActive
  const checkIsActive = () => {
    setPlayer(
      player.map(item =>
        item.isActive === true
          ? {
              ...item,
              isActive: !item.isActive,
              score: item.score + item.current,
              current: 0,
            }
          : { ...item, isActive: !item.isActive }
      )
    );
    setDice(0);
  };

  // switch when dice = 1
  const checkWhenOne = () => {};

  // new game
  const onNewGame = () => {
    setIsPlaying(false);
    setPlayer(dataPlayer);
  };

  return (
    <main>
      <PlayersView dataPlayer={player} />
      <ViewDice
        img={myIMG[`${dice - 1}`]}
        isPlaying={isPlaying}
        onRollDice={onStartRollDice}
        onNewGame={onNewGame}
        onRememberData={rememberData}
      />
    </main>
  );
};

export default App;
