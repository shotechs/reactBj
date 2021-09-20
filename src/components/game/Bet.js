import React from "react";

function Bet() {
  return <div className="betTxt col-4">bet #</div>;
}

export function BetDown(setBetAmount, betAmount) {
  if (betAmount !== 0) {
    setBetAmount(betAmount - 1);
  }
  return betAmount;
}

export default Bet;
