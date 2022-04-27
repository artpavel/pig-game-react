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
import { TERM } from './components/ItemPlayer';

const dataPlayer = [
  {
    id: 1,
    score: 0,
    current: 0,
    isActive: true,
  },
  {
    id: 2,
    score: 0,
    current: 0,
    isActive: false,
  },
];

const myIMG = [icon0, icon1, icon2, icon3, icon4, icon5];

const App = () => {
  // show dice
  const [isPlaying, setIsPlaying] = useState(false);
  const [dice, setDice] = useState(0);
  // our players
  const [player, setPlayer] = useState(dataPlayer);
  // start and finish game
  const [isFinish, setIsFinish] = useState(false);

  const onStartRollDice = () => {
    if (!isFinish) {
      setIsPlaying(true);
      const random = Math.trunc(Math.random() * 6) + 1;

      // move to another player
      if (random === 1) {
        checkWhenOne();
        setDice(random);
      } else {
        addCurrent(random);
        setDice(random);
      }
    }
    // end game, when will be TERM(20)
    endGame();
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
    if (!isFinish) {
      checkIsActive();
      setIsPlaying(false);
    }
    endGame();
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
  const checkWhenOne = () => {
    const newPlayer = player.map(item =>
      item.isActive === true
        ? {
            ...item,
            isActive: !item.isActive,
            current: 0,
          }
        : { ...item, isActive: !item.isActive, current: 0 }
    );
    setPlayer(newPlayer);
    setDice(0);
  };

  // new game
  const onNewGame = () => {
    setIsPlaying(false);
    setIsFinish(false);
    setPlayer(dataPlayer);
  };

  // end game
  const endGame = () => {
    const newPlayer = player.filter(item => item.score >= TERM);
    if (newPlayer.length) {
      setIsFinish(true);
      setDice(0);
      setIsPlaying(false);
    }
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
