import React from "react";

function GetCards() {
  return <div></div>;
}

export function hitCard(
  setp1picA1,
  gameStart,
  game_id,
  game_status,
  p1picA1,
  getBGPic,
  hitGame,
  GameOver
) {
  setp1picA1([...p1picA1, getBGPic()]);
  if (gameStart === true) {
    hitGame(game_id, "H1");
    if (game_status === "Game Over") {
      GameOver();
    }
  }
}

export default GetCards;
