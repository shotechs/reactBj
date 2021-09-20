import React from "react";
import Button from "../custom/Button";

export function BetUp(setBetAmount, betAmount) {
  setBetAmount(betAmount + 1);
  return betAmount;
}

function BetUpBtn({ onClick, disabledBtn }) {
  return (
    <div className="betUpBtn">
      <Button
        css={"btn btn-danger btn-block bUp"}
        text={"BET UP"}
        onClick={onClick}
        disabledBtn={disabledBtn}
      />
    </div>
  );
}

export default BetUpBtn;
