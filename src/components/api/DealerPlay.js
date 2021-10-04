import { HandleErrors } from "../helpers/errors";
async function StandGame(
  game_id,
  setpStatus,
  setPlayer1Score1,
  setDealerScore,
  setGame_status,
  setDealercardsA,
  setdStatus,
  user
) {
  const standGameUrl = "http://localhost:5000/api/bjGame/dealerplay";

  const data = { user_id: user._id, _id: game_id };
  const res = await fetch(standGameUrl, {
    method: "PATCH",
    headers: {
      "auth-token": localStorage.getItem("token"),
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers":
        "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
    },
    body: JSON.stringify(data),
  })
    .then(HandleErrors)
    .then((response) => response.json())
    .then((data) => {
      setpStatus(data.playerCards[0].status);
      setPlayer1Score1(data.playerCards[0].points);
      setDealercardsA(data.dealerCards.card);
      setDealerScore(data.dealerCards.points);
      setdStatus(data.dealerCards.status);
      setGame_status(data.game_status);
      //update view
      // flip cards
      // show score
      // highlights off
      // game off
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return res;
}
//stand end

//stand start
export function Stand(
  gameStart,
  setpStatus,
  setdStatus,
  dealercardsA,
  setdpicA1,
  dpicA1,
  getBGPic,
  game_id,
  setPlayer1Score1,
  setDealerScore,
  setGame_status,
  setDealercardsA,
  user
) {
  if (gameStart === true) {
    // player set to off
    setpStatus(false);
    // dealer set to on
    setdStatus(true);
    //stand api call
    StandGame(
      game_id,
      setpStatus,
      setPlayer1Score1,
      setDealerScore,
      setGame_status,
      setDealercardsA,
      setdStatus,
      user
    );

    dealercardsA.forEach(myFunction);
    function myFunction() {
      setdpicA1([...dpicA1, getBGPic()]);
    }
  }
}
