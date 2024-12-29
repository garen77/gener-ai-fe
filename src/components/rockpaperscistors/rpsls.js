/**
 * RockPaperScissorsLizardSpock
 */
import React, { useState } from 'react';
import Header from './components/Header';
import Start from './components/Start';
import Game from './components/Game';
import './rpsls.scss'

function RockPaperScissorsLizardSpock() {
  const [isGame, setGame] = useState(false)

  const onStart = () => {
    setGame(!isGame)
  }

  return (
    <div className="container">
     <Header />
     {isGame ? (<Game />) : (<Start onstart={onStart}/>)}
    </div>
  );
}

export default RockPaperScissorsLizardSpock;