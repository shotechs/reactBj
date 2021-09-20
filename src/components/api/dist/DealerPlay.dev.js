"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StandGame = StandGame;
exports.Stand = Stand;

var _errors = require("../helpers/errors");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function StandGame(game_id, setpStatus, setPlayer1Score1, setDealerScore, setGame_status, setDealercardsA, user) {
  var standGameUrl, data, res;
  return regeneratorRuntime.async(function StandGame$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          standGameUrl = "http://localhost:5000/api/bjGame/dealerplay";
          data = {
            user_id: user._id,
            _id: game_id
          };
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(standGameUrl, {
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
            //setpStatus(data.playerCards[0].status)
            setpStatus("");
            setPlayer1Score1(data.playerCards[0].points);
            setDealercardsA(data.dealerCards.card);
            setDealerScore(data.dealerCards.points); //setdStatus(data.dealerCards.status)

            setGame_status(data.game_status); //update view
            // flip cards
            // show score
            // highlights off
            // game off
          })["catch"](function (error) {
            console.error("Error:", error);
          }));

        case 4:
          res = _context.sent;
          return _context.abrupt("return", res);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
} //stand end
//stand start


function Stand(gameStart, setpStatus, setdStatus, dealercardsA, setdpicA1, dpicA1, getBGPic, game_id, setPlayer1Score1, setDealerScore, setGame_status, setDealercardsA, user) {
  if (gameStart === true) {
    // player set to off
    setpStatus(false); // dealer set to on

    setdStatus(true); //stand api call

    StandGame(game_id, setpStatus, setPlayer1Score1, setDealerScore, setGame_status, setDealercardsA, user); // set the pic for dealer

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = dealercardsA[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var x = _step.value;
        console.log(x);
        setdpicA1([].concat(_toConsumableArray(dpicA1), [getBGPic()]));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
}