"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hitGame = hitGame;
exports.hitCard = hitCard;

var _errors = require("../helpers/errors");

var _GetPic = require("../custom/GetPic");

var _GameOver = require("../game/GameOver");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function hitGame(setpStatus, setPlayer1Score1, setPlayer1hit, setdStatus, setPlayer1cardsA, setGame_status, setDealercardsA, user, game_id, Hand, setErrMes) {
  var hitGameUrl, data;
  return regeneratorRuntime.async(function hitGame$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          hitGameUrl = "http://localhost:5000/api/bjGame/playerhit";
          data = {
            user_id: user._id,
            _id: game_id,
            hand: Hand
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(hitGameUrl, {
            method: "PATCH",
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
            //  console.log('Success:', data);
            setpStatus(data.playerCards[0].status);
            setPlayer1Score1(data.playerCards[0].points); //const cardHit = data.playerCards[0].hit;
            //const sideView = "ps";
            //handCardAdd(data.playerCards[0].card, data.playerCards[0].card[cardHit], data.playerCards[0].hit, sideView, "gameboard")

            setPlayer1hit(data.playerCards[0].hit);
            setPlayer1cardsA(data.playerCards[0].card);
            setDealercardsA(data.dealerCards.card);
            setdStatus(data.dealerCards.status);
            setGame_status(data.game_status);
          })["catch"](function (e) {
            // console.log("Connection error1", e);
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

function hitCard(setp1picA1, gameStart, game_id, game_status, p1picA1, setpStatus, setPlayer1Score1, setPlayer1hit, setdStatus, setPlayer1cardsA, setGame_status, setDealercardsA, user, Hand, setErrMes) {
  setErrMes("");
  setp1picA1([].concat(_toConsumableArray(p1picA1), [(0, _GetPic.getBGPic)()]));

  if (gameStart === true) {
    hitGame(setpStatus, setPlayer1Score1, setPlayer1hit, setdStatus, setPlayer1cardsA, setGame_status, setDealercardsA, user, game_id, Hand, setErrMes);

    if (game_status === "Game Over") {
      (0, _GameOver.GameOver)();
    }
  }
}