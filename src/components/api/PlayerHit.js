import { HandleErrors } from "../helpers/errors";
import { getBGPic } from "../custom/GetPic";
import { GameOver } from "../game/GameOver";

export async function hitGame(
  setpStatus,
  setPlayer1Score1,
  setPlayer1hit,
  setdStatus,
  setPlayer1cardsA,
  setGame_status,
  setDealercardsA,
  user,
  game_id,
  Hand,
  setErrMes
) {
  const hitGameUrl = "http://localhost:5000/api/bjGame/playerhit";
  const data = { user_id: user._id, _id: game_id, hand: Hand };
  await fetch(hitGameUrl, {
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
      //  console.log('Success:', data);
      setpStatus(data.playerCards[0].status);
      setPlayer1Score1(data.playerCards[0].points);
      //const cardHit = data.playerCards[0].hit;
      //const sideView = "ps";
      //handCardAdd(data.playerCards[0].card, data.playerCards[0].card[cardHit], data.playerCards[0].hit, sideView, "gameboard")

      setPlayer1hit(data.playerCards[0].hit);
      setPlayer1cardsA(data.playerCards[0].card);
      setDealercardsA(data.dealerCards.card);
      setdStatus(data.dealerCards.status);
      setGame_status(data.game_status);
    })
    .catch((e) => {
      // console.log("Connection error1", e);
      setErrMes(e.toString());
      if (typeof e.json === "function") {
        e.json()
          .then((jsonError) => {
            console.log("Json error from API");
            console.log(jsonError);
          })
          .catch((genericError) => {
            console.log("Generic error from API");
            console.log(e.statusText);
          });
      }
    });
}

export function hitCard(
  setp1picA1,
  gameStart,
  game_id,
  game_status,
  p1picA1,
  setpStatus,
  setPlayer1Score1,
  setPlayer1hit,
  setdStatus,
  setPlayer1cardsA,
  setGame_status,
  setDealercardsA,
  user,
  Hand,
  setErrMes
) {
  setErrMes("");
  setp1picA1([...p1picA1, getBGPic()]);
  if (gameStart === true) {
    hitGame(
      setpStatus,
      setPlayer1Score1,
      setPlayer1hit,
      setdStatus,
      setPlayer1cardsA,
      setGame_status,
      setDealercardsA,
      user,
      game_id,
      Hand,
      setErrMes
    );
    if (game_status === "Game Over") {
      GameOver();
    }
  }
}
