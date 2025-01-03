import React from "react";
import Game from "./components/Game/Game";
import Constants from "./utils/constants";

const PopupBalloon = () => {
  return (
    <Game
      numberOfBalloons={Constants.gameCells}
      gameDuration={Constants.gameDuration}
    />
  );
};

export default PopupBalloon;