//import Bet from "./Bet";
import BetDownBtn, { BetDown } from "./BetDownBtn";
import BetPop from "./BetPop";
import BetUpBtn, { BetUp } from "./BetUpBtn";
import Cash from "../accounts/Cash";
import DDBtn from "./DDBtn";
import DealBtn from "./DealBtn";
import GameBoard from "./GameBoard";
import Help from "./Help";
import MoreGames from "./MoreGames";
import SplitBtn from "./SplitBtn";
// import SplitPlane from "./SplitPlane";
import StandBtn from "./StandBtn";
import WinPlane from "./WinPlane";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Deal } from "../api/Deal";

import Stand from "./Stand";
import { getBGPic } from "../custom/GetPic";
import { DealTxtBtn } from "./DealBtn";

import { hitCard } from "../api/PlayerHit";

function Game({ user, setLoggedInStatus, setUser }) {
  const history = useHistory();
  if (!user) {
    history.push("/");
  }

  // const [game, setGame] = useState(Deal)

  const [game_id, setGame_id] = useState("");
  const [gameStart, setGameStart] = useState(false);
  let moneyType = user.moneyType;
  const [betAmount, setBetAmount] = useState(1);
  const [showSplit, setShowSplit] = useState(false);
  const [showSplitBtn, setShowSplitBtn] = useState(false);
  const [pStatus, setpStatus] = useState("");
  const [dStatus, setdStatus] = useState("");
  const [dealerScore, setDealerScore] = useState(0);
  const [player1Score1, setPlayer1Score1] = useState(0);
  const [player1Score2, setPlayer1Score2] = useState(0);
  const [player1card1, setPlayer1card1] = useState(
    "assets\\cards\\cardBack.png"
  );
  const [player1card2, setPlayer1card2] = useState(
    "assets\\cards\\cardBack.png"
  );
  const [player1DD, setPlayer1DD] = useState(false);
  const [player1hit, setPlayer1hit] = useState(0);
  const [dealerCard1, setDealerCard1] = useState("assets\\cards\\cardBack.png");
  const [dealerCard2, setDealerCard2] = useState("assets\\cards\\cardBack.png");
  const [player1cardsA, setPlayer1cardsA] = useState([
    player1card1,
    player1card2,
  ]);
  const [dealercardsA, setDealercardsA] = useState([dealerCard1, dealerCard2]);
  const [game_status, setGame_status] = useState("");
  const [p1picA1, setp1picA1] = useState([getBGPic(), getBGPic()]);
  const [dpicA1, setdpicA1] = useState([getBGPic(), getBGPic()]);
  const [errMes, setErrMes] = useState("");
  const [Hand, setHand] = useState("H1");

  return (
    <main role="main">
      {/* {alertMessage()} */}
      {/* <Deal /> */}
      <div className="container">
        <div className="alert-danger">{errMes}</div>
        <WinPlane />
        <GameBoard
          gameStart={gameStart}
          userName={user.username}
          pStatus={game_status !== "Game Over" ? "" : pStatus}
          dStatus={dStatus}
          game_status={game_status}
          player1card1={player1card1}
          player1card2={player1card2}
          player1DD={player1DD}
          player1hit={player1hit}
          dealerCard1={dealerCard1}
          dealerCard2={dealerCard2}
          player1Score1={player1Score1}
          player1Score2={player1Score2}
          dealerScore={dealerScore}
          showSplitBtn={showSplitBtn}
          showSplit={showSplit}
          p1imgStyle={p1picA1}
          dimgStyle={dpicA1}
          player1cardsA={player1cardsA}
          dealercardsA={dealercardsA}
        />
        <div className="row justify-content-end">
          <Cash moneyType={user.moneyType} cash={user.cash} />
        </div>
        <div className="row">
          {/* //  button row */}
          <div className="col-6 m-r-m10 m-t-23">
            {/* //  btn1-3 */}
            <div className="row">
              <div className="col-5 pad-10">
                <Help />
              </div>
              <div className="col">
                <MoreGames
                //   color={showAdd ? 'red' : 'green'}
                //   text={showAdd ? 'Close' : 'Add'}
                //   onClick={onAdd}
                />
              </div>
              <div className="col-6 pad-10">
                {gameStart && showSplit ? <SplitBtn /> : ""}
              </div>
            </div>
          </div>
          <div className="col max-w-10">
            <BetPop moneyType={moneyType} amount={betAmount} />
          </div>
          <div className="col-5 m-t-23">
            <div className="row">
              {gameStart ? (
                <StandBtn
                  onClick={() =>
                    Stand(
                      gameStart,
                      setpStatus,
                      setdStatus,
                      dealercardsA,
                      setdpicA1,
                      dpicA1,
                      getBGPic
                    )
                  }
                  disabledBtn={pStatus ? true : false}
                />
              ) : (
                ""
              )}
              {gameStart && player1DD ? <DDBtn /> : ""}
              <DealBtn
                color={
                  gameStart === true && game_status !== "Game Over"
                    ? "red"
                    : "green"
                }
                text={DealTxtBtn(gameStart, game_status)}
                onClick={
                  gameStart === true && game_status !== "Game Over"
                    ? () =>
                        hitCard(
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
                        )
                    : () =>
                        Deal(
                          setGameStart,
                          setGame_id,
                          setpStatus,
                          setPlayer1Score1,
                          setPlayer1card1,
                          setPlayer1card2,
                          setPlayer1DD,
                          setPlayer1hit,
                          setDealerCard2,
                          setBetAmount,
                          setDealerScore,
                          setdStatus,
                          setShowSplitBtn,
                          setShowSplit,
                          setPlayer1cardsA,
                          setGame_status,
                          setDealercardsA,
                          setErrMes,
                          errMes,
                          betAmount,
                          user,
                          game_status,
                          setPlayer1Score2,
                          setDealerCard1,
                          player1card1,
                          player1card2,
                          dealerCard1,
                          dealerCard2,
                          setLoggedInStatus,
                          setUser
                        )
                }
              />
            </div>
          </div>
        </div>
        <div className="row m-t-25">
          <div className="col ">
            <BetUpBtn
              onClick={() => BetUp(setBetAmount, betAmount)}
              disabledBtn={gameStart}
            />
          </div>
          <div className="col ">
            <BetDownBtn
              onClick={() => BetDown(setBetAmount, betAmount)}
              disabledBtn={gameStart}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Game;
