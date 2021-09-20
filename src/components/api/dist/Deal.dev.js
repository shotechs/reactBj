"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetDeal = GetDeal;
exports.Deal = Deal;
exports.Restart1 = Restart1;

var _errors = require("../helpers/errors");

var _GameOver = require("../game/GameOver");

//import React, { Component } from "react";
// export default class Deal extends Component {
//   constructor() {
//     super();
//     this.state = { color: "red" };
//   }
//   //   static alertMessage() {
//   //     console.log("Called from outside");
//   //   }
//   render() {
//     //console.log("class here");
//     return (
//       <h2>
//         Hello, {this.props.name} color: {this.state.color};
//       </h2>
//     );
//   }
// }
function GetDeal(setGame_id, setpStatus, setPlayer1Score1, setPlayer1card1, setPlayer1card2, setPlayer1DD, setPlayer1hit, setDealerCard2, setBetAmount, setDealerScore, setdStatus, setShowSplitBtn, setShowSplit, setPlayer1cardsA, setGame_status, setDealercardsA, setErrMes, betAmount, user) {
  var getGameUrl, data;
  return regeneratorRuntime.async(function GetDeal$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          getGameUrl = "http://localhost:5000/api/bjGame/deal";
          data = {
            id: user._id,
            bet: betAmount
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(getGameUrl, {
            method: "POST",
            headers: {
              "auth-token": localStorage.getItem("token"),
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": "true",
              "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
              "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Authorization, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
            },
            body: JSON.stringify(data)
          }).then(_errors.HandleErrors).then(function (response) {
            return response.json();
          }).then(function (data) {
            // console.log("data", data);
            if (data !== undefined) {
              setGame_id(data._id);
              setpStatus(data.playerCards[0].status);
              setPlayer1Score1(data.playerCards[0].points);
              setPlayer1card1("assets\\cards\\" + data.playerCards[0].card[0] + ".png");
              setPlayer1card2("assets\\cards\\" + data.playerCards[0].card[1] + ".png");
              setPlayer1DD(data.playerCards[0].DD);
              setPlayer1hit(data.playerCards[0].hit); // setDealerCard1("assets\\cards\\" + data.dealerCards.card[0] + ".png")

              setDealerCard2("assets\\cards\\" + data.dealerCards.card[1] + ".png");
              setBetAmount(data.bet);
              setDealerScore(data.dealerCards.points);
              setdStatus(data.dealerCards.status);
              setShowSplitBtn(data.playerCards[0].split);
              setShowSplit(data.playerCards[0].split);
              setPlayer1cardsA(data.playerCards[0].card);
              setDealercardsA(data.dealerCards.card);
              setGame_status(data.game_status);
            }
          })["catch"](function (e) {
            //console.log("Connection error1", e);
            setErrMes(e.toString());

            if (typeof e.json === "function") {
              e.json().then(function (jsonError) {
                console.log("Json error from API");
                console.log(jsonError);
              })["catch"](function (genericError) {
                console.log("Generic error from API");
                console.log(e.statusText);
              });
            }
          }));

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function Deal(setGameStart, setGame_id, setpStatus, setPlayer1Score1, setPlayer1card1, setPlayer1card2, setPlayer1DD, setPlayer1hit, setDealerCard2, setBetAmount, setDealerScore, setdStatus, setShowSplitBtn, setShowSplit, setPlayer1cardsA, setGame_status, setDealercardsA, setErrMes, errMes, betAmount, user, game_status, setPlayer1Score2, setDealerCard1, player1card1, player1card2, dealerCard1, dealerCard2, setLoggedInStatus, setUser) {
  setErrMes(""); //setBet()

  if (betAmount > 0) {
    // restart
    Restart1(setGame_id, setpStatus, setPlayer1Score1, setPlayer1card1, setPlayer1card2, setPlayer1DD, setPlayer1hit, setDealerCard2, setDealerScore, setdStatus, setShowSplitBtn, setShowSplit, setPlayer1cardsA, setGame_status, setDealercardsA, setPlayer1Score2, setDealerCard1, setGameStart, player1card1, player1card2, dealerCard1, dealerCard2);
    GetDeal(setGame_id, setpStatus, setPlayer1Score1, setPlayer1card1, setPlayer1card2, setPlayer1DD, setPlayer1hit, setDealerCard2, setBetAmount, setDealerScore, setdStatus, setShowSplitBtn, setShowSplit, setPlayer1cardsA, setGame_status, setDealercardsA, setErrMes, betAmount, user);

    if (errMes !== "") {
      console.log("error Log");
      Restart1(setGame_id, setpStatus, setPlayer1Score1, setPlayer1card1, setPlayer1card2, setPlayer1DD, setPlayer1hit, setDealerCard2, setDealerScore, setdStatus, setShowSplitBtn, setShowSplit, setPlayer1cardsA, setGame_status, setDealercardsA, setPlayer1Score2, setDealerCard1, setGameStart, player1card1, player1card2, dealerCard1, dealerCard2);
    }

    setGameStart(true);

    if (game_status === "Game Over") {
      (0, _GameOver.GameOver)(setGameStart, setLoggedInStatus, setUser, setErrMes);
    }
  } else {
    console.log("bet = 0", betAmount);
  }

  return;
}

function Restart1(setGame_id, setpStatus, setPlayer1Score1, setPlayer1card1, setPlayer1card2, setPlayer1DD, setPlayer1hit, setDealerCard2, setDealerScore, setdStatus, setShowSplitBtn, setShowSplit, setPlayer1cardsA, setGame_status, setDealercardsA, setPlayer1Score2, setDealerCard1, setGameStart, player1card1, player1card2, dealerCard1, dealerCard2) {
  setGame_id("");
  setShowSplit(false);
  setShowSplitBtn(false);
  setpStatus("");
  setdStatus("");
  setPlayer1Score1(0);
  setPlayer1Score2(0);
  setDealerScore(0);
  setPlayer1card1("assets\\cards\\cardBack.png");
  setPlayer1card2("assets\\cards\\cardBack.png");
  setPlayer1DD(false);
  setPlayer1hit(0);
  setDealerCard1("assets\\cards\\cardBack.png");
  setDealerCard2("assets\\cards\\cardBack.png");
  setPlayer1cardsA([player1card1, player1card2]);
  setDealercardsA([dealerCard1, dealerCard2]);
  setGame_status("");
  setGameStart(false);
  console.log("Restart1");
} // ReactDOM.render(<Car color="red"/>, document.getElementById('root'));