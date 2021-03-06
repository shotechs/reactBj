import React from "react";
import Button from "../custom/Button";
function BetDownBtn({ onClick, disabledBtn }) {
  return (
    <div className="betDownBtn">
      <Button
        css={"btn btn-danger btn-block bDown"}
        text={"BET DOWN"}
        onClick={onClick}
        disabledBtn={disabledBtn}
      />
    </div>
  );
}

export function BetDown(setBetAmount, betAmount) {
  if (betAmount !== 0) {
    setBetAmount(betAmount - 1);
  }
  return betAmount;
}

export default BetDownBtn;
