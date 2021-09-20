//stand start
function Stand(
  gameStart,
  setpStatus,
  setdStatus,
  dealercardsA,
  setdpicA1,
  dpicA1,
  getBGPic
) {
  if (gameStart === true) {
    // player set to off
    setpStatus(false);
    // dealer set to on
    setdStatus(true);
    // standGame(game_id);

    for (let x of dealercardsA) {
      console.log(x);
      setdpicA1([...dpicA1, getBGPic()]);
    }
  }
}

export default Stand;
