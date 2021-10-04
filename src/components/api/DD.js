import { HandleErrors } from "../helpers/errors";
import { GameOver } from "../game/GameOver";

async function GetDD(
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
  setErrMes,
  setPlayer1DD,
  setBetAmount
) {
  const getGameUrl = "http://localhost:5000/api/bjGame/dd";

  const data = { user_id: user._id, _id: game_id, hand: Hand };
  await fetch(getGameUrl, {
    method: "POST",
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
      console.log("data", data);
      if (data !== undefined) {
        setpStatus(data.playerCards[0].status);
        setPlayer1Score1(data.playerCards[0].points);
        // setPlayer1card3(
        //   "assets\\cards\\" + data.playerCards[0].card[0] + ".png"
        // );

        setPlayer1cardsA(data.playerCards[0].card);
        setDealercardsA(data.dealerCards.card);
        setdStatus(data.dealerCards.status);
        setGame_status(data.game_status);

        setPlayer1DD(data.playerCards[0].DD);
        setPlayer1hit(data.playerCards[0].hit);
        setBetAmount(data.bet);
      }
    })
    .catch((e) => {
      //console.log("Connection error1", e);
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

export function DD(
  setGameStart,
  setErrMes,
  errMes,
  user,
  setPlayer1Score1,
  game_status,
  setLoggedInStatus,
  setUser,
  setpStatus,
  setPlayer1hit,
  setdStatus,
  setPlayer1cardsA,
  setGame_status,
  setDealercardsA,
  game_id,
  Hand,
  setPlayer1DD,
  setBetAmount
) {
  setErrMes("");

  GetDD(
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
    setErrMes,
    setPlayer1DD,
    setBetAmount
  );

  if (errMes !== "") {
    console.log("error Log", errMes);
  }

  //
  setGameStart(false);

  if (game_status === "Game Over") {
    GameOver(setGameStart, setLoggedInStatus, setUser, setErrMes);
  }

  return;
}
