import React from "react";
import Button from "../custom/Button";

function DealBtn({ text, onClick }) {
  return (
    <div className="dealBtn pad-10">
      <Button
        css={"btn btn-success btn-block deal"}
        text={text}
        onClick={onClick}
      />
    </div>
  );
}

export function DealTxtBtn(gameStart, game_status) {
  if (gameStart === true && game_status !== "Game Over") {
    return "Hit";
  } else if (gameStart === true && game_status === "Game Over") {
    return "Play Again";
  } else if (gameStart === false) {
    return "Deal";
  }
  return "Deal";
}

export default DealBtn;
