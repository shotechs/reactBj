import React from 'react'
import Bet from './Bet'
import BetDownBtn from './BetDownBtn'
import BetPop from './BetPop'
import BetUpBtn from './BetUpBtn'
import Cash from '../accounts/Cash'
import DDBtn from './DDBtn'
import DealBtn from './DealBtn'
import GameBoard from './GameBoard'
import Help from './Help'
import MoreGames from './MoreGames'
import SplitBtn from './SplitBtn'
import SplitPlane from './SplitPlane'
import StandBtn from './StandBtn'
// import PropTypes from 'prop-types'
import WinPlane from './WinPlane'
import { useState, useEffect } from 'react'
//import { gameBj } from "../db2"
import { useHistory } from 'react-router-dom';
// import Test from './Test'


function Game({ loggedInStatus, user, token }) {


    const history = useHistory();
    if (!user) {
        history.push('/')
    }


    const [game, setGame] = useState("")

    const [game_id, setGame_id] = useState('')
    const [gameStart, setGameStart] = useState(false)
    const [cash, setCash] = useState(user.cash)
    const [moneyType, setMoneyType] = useState(user.moneyType)
    const [userName, setUserName] = useState(user.username)
    const [betAmount, setBetAmount] = useState(1)
    const [showSplit, setShowSplit] = useState(false)
    const [showSplitBtn, setShowSplitBtn] = useState(false)
    const [pStatus, setpStatus] = useState("")
    const [dStatus, setdStatus] = useState("")
    const [dealerScore, setDealerScore] = useState(0)
    const [player1Score1, setPlayer1Score1] = useState(0)
    const [player1Score2, setPlayer1Score2] = useState(0)
    const [player1card1, setPlayer1card1] = useState("assets\\cards\\cardBack.png")
    const [player1card2, setPlayer1card2] = useState("assets\\cards\\cardBack.png")
    const [player1DD, setPlayer1DD] = useState(false)
    const [player1hit, setPlayer1hit] = useState(0)
    const [dealerCard1, setDealerCard1] = useState("assets\\cards\\cardBack.png")
    const [dealerCard2, setDealerCard2] = useState("assets\\cards\\cardBack.png")
    const [player1cardsA, setPlayer1cardsA] = useState([player1card1, player1card2])
    const [dealercardsA, setDealercardsA] = useState([dealerCard1, dealerCard2])
    const [game_status, setGame_status] = useState("")
    // todo fix
    //  const p1picA1 = [getBGPic(), getBGPic()]
    //   const dpicA1 = [getBGPic(), getBGPic()]
    //...
    const [p1picA1, setp1picA1] = useState([getBGPic(), getBGPic()])
    const [dpicA1, setdpicA1] = useState([getBGPic(), getBGPic()])


    const [errMes, setErrMes] = useState("");


    function BackHome() {
        history.push('/')
    }


    function handleErrors(response) {
        if (!response.ok) {
            // setErrMes(response.text())
            if (response.status === 400) {
                BackHome()
                const msg1 = response.json().then(msg => {
                    //     console.log(msg.message);
                    setErrMes(msg.message)

                })

                //  console.log("Fetch error 400 ", msg1);
                //  return response
            }
            throw Error(response.statusText);
        }
        return response;
    }


    // get the game here
    //  const [gameBj, setGameBj] = useState([]);

    useEffect(() => {
        //  console.log(gameStart);
    }, [])

    const getGameUrl = "http://localhost:5000/api/bjGame/deal";
    const getGame = async () => {
        const data = { id: user._id, bet: betAmount }
        const res = await fetch(getGameUrl, {
            method: 'POST',
            headers: {
                "auth-token": localStorage.getItem("token"),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }
        ).then(handleErrors).then(response => response.json())
            .then(data => {


                //console.log('Success:', data);
                setGame_id(data._id)
                setpStatus(data.playerCards[0].status)
                setPlayer1Score1(data.playerCards[0].points)
                setPlayer1card1("assets\\cards\\" + data.playerCards[0].card[0] + ".png")
                setPlayer1card2("assets\\cards\\" + data.playerCards[0].card[1] + ".png")
                setPlayer1DD(data.playerCards[0].DD)
                setPlayer1hit(data.playerCards[0].hit)

                // setDealerCard1("assets\\cards\\" + data.dealerCards.card[0] + ".png")
                setDealerCard2("assets\\cards\\" + data.dealerCards.card[1] + ".png")
                setBetAmount(data.playerCards[0].bet)
                setDealerScore(data.dealerCards.points)
                setdStatus(data.dealerCards.status)
                setShowSplitBtn(data.playerCards[0].split)
                setShowSplit(data.playerCards[0].split)
                setPlayer1cardsA(data.playerCards[0].card)
                setDealercardsA(data.dealerCards.card)
                setGame_status(data.game_status)


            },
            )
            .catch((error) => {
                console.error(error);
            });

    }

    const hitGameUrl = "http://localhost:5000/api/bjGame/playerhit";


    const hitGame = async (game_id, Hand) => {
        const data = { user_id: user._id, _id: game_id, hand: Hand }
        const res = await fetch(hitGameUrl, {
            method: 'PATCH',
            headers: {
                "auth-token": localStorage.getItem("token"),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }
        ).then(handleErrors).then(response => response.json())
            .then(data => {
                //  console.log('Success:', data);
                setpStatus(data.playerCards[0].status)
                setPlayer1Score1(data.playerCards[0].points)
                const cardHit = data.playerCards[0].hit
                const sideView = "ps";
                handCardAdd(data.playerCards[0].card, data.playerCards[0].card[cardHit], data.playerCards[0].hit, sideView, "gameboard")

                setPlayer1hit(data.playerCards[0].hit)
                setPlayer1cardsA(data.playerCards[0].card)
                setDealercardsA(data.dealerCards.card)
                setdStatus(data.dealerCards.status)
                setGame_status(data.game_status)
            },
            )
            .catch((error) => {
                console.error('Error:', error);
            });

    }


    function handCardAdd(
        getNextCard_txt_p,
        cardName_p,
        startpoint1_p,
        sideView_p,
        handSide
    ) {

        let i = startpoint1_p;
        //hit_counter
        let hit_counter = i;
        let row = 1;
        //file name ref
        let getNextCard = getNextCard_txt_p + ".png";
        // eval("var " + cardName_p + "=  getNextCard;");

        // //if end of grid row
        // if (
        //     hit_counter == i &&
        //     (hit_counter == 3 || hit_counter == 6 || hit_counter == 9)
        // ) {
        //     row = 1;
        //     addcardView1(getNextCard, cardName_p, row, sideView_p, handSide);
        //     row++;
        // }
        // //if on a new row
        // else if (
        //     hit_counter == i &&
        //     (hit_counter == 4 || hit_counter == 7 || hit_counter == 10)
        // ) {
        //     addcardView2(getNextCard, cardName_p, row, sideView_p, handSide);
        // } // middle
        // else if (playerStandH1 == "cardAdd") {
        //     addcardView3(getNextCard);
        // } else {
        //     addcardView1(getNextCard, cardName_p, row, sideView_p, handSide);
        // }

        // if (playerStandH1 == "hand1" || playerStandH1 == "") {
        //     startpoint1++;
        // } else if (playerStandH1 == "hand2" || playerStandH1 == "cardAdd") {
        //     startpoint3++;
        // }
        // // next point
    }



    // function addcardView1(getNextCard, cardName, row, side, handSide) {
    //     //new col
    //     $("." + handSide + " ." + side + "r" + row).append(
    //       "<div class='col'><img  src='assets/cards/" +
    //         getNextCard +
    //         "' alt='...'  class='cards " +
    //         cardName +
    //         "'/></div>"
    //     );
    //     $("." + handSide + " ." + cardName).css(
    //       "background-image",
    //       "linear-gradient(rgba(255, 255, 255, .2), rgba(255, 255, 255, 0.1)),url('./assets/pics/g" +
    //         getGirlPic() +
    //         ".jpg')"
    //     );
    //   }

    //   function addcardView2(getNextCard, cardName, row, side, handSide) {
    //     //make new row
    //     $("." + handSide + " ." + side).append(
    //       "<div class='row " +
    //         side +
    //         "r" +
    //         row +
    //         "'><div class='col'><img  src='assets/cards/" +
    //         getNextCard +
    //         "' alt='...'  class='cards " +
    //         cardName +
    //         "'/></div></div>"
    //     );
    //     $("." + handSide + " ." + cardName).css(
    //       "background-image",
    //       "linear-gradient(rgba(255, 255, 255, .2), rgba(255, 255, 255, 0.1)),url('./assets/pics/g" +
    //         getGirlPic() +
    //         ".jpg')"
    //     );
    //   }

    //   function addcardView3(getNextCard) {
    //     //new col
    //     $(".splitHand .card2 .pc2").attr("src", "assets/cards/" + getNextCard);
    //     $(".splitHand .card2 .pc2").css(
    //       "background-image",
    //       "linear-gradient(rgba(255, 255, 255, .2), rgba(255, 255, 255, 0.1)),url('./assets/pics/g" +
    //         getGirlPic() +
    //         ".jpg')"
    //     );
    //   }




    const Restart1 = () => {
        setGame_id('')
        setShowSplit(false)
        setShowSplitBtn(false)
        setpStatus("")
        setdStatus("")
        setPlayer1Score1(0)
        setPlayer1Score2(0)
        setDealerScore(0)
        setPlayer1card1("assets\\cards\\cardBack.png")
        setPlayer1card2("assets\\cards\\cardBack.png")
        setPlayer1DD(false)
        setPlayer1hit(0)
        setDealerCard1("assets\\cards\\cardBack.png")
        setDealerCard2("assets\\cards\\cardBack.png")
        setPlayer1cardsA([player1card1, player1card2])
        setDealercardsA([dealerCard1, dealerCard2])
        setGame_status("")
        setGameStart(false)
    }


    // get randon number return
    function callRandom(start, last) {
        let number = start + Math.floor(Math.random() * last);
        return number;
    }
    // get number 1 - 55
    function getBGPic() {
        //to do fix number get from api
        let newRandom = callRandom(1, 55)
        let newPIc = "linear-gradient(rgba(255, 255, 255, .2), rgba(255, 255, 255, 0.1)),url('./assets/pics/g" + newRandom + '.jpg'
        return { backgroundImage: newPIc }
    }

    const Deal = () => {
        // restart
        Restart1()
        setGameStart(true)
        getGame()
        if (game_status === "Game Over") {
            GameOver()
        }
        return
    }

    const hitCard = () => {
        setp1picA1([...p1picA1, getBGPic()])
        if (gameStart === true) {
            hitGame(game_id, "H1")
            if (game_status === "Game Over") {
                GameOver()
            }
        }
    }

    const BetUp = () => {
        setBetAmount(betAmount + 1)
        return betAmount
    }

    const BetDown = () => {
        if (betAmount !== 0) {
            setBetAmount(betAmount - 1)
        }
        return betAmount
    }




    const GameOver = () => {
        setGameStart(false)

        if (pStatus === "PLAYER LOSE") {
            //  CashLose()
            //     console.log('pStatus:', pStatus);

        } else if (pStatus === "PLAYER WINS") {
            //   CashWin()
            //    console.log('pStatus:', pStatus);
        }

        //update cash


    }



    return (
        < main role="main" >
            {/* <div> {user._id}</div> */}
            <div className="alert-danger">{errMes}</div>
            {/* {console.log("props ", props)} */}
            {/* <Test user={user}
                loggedInStatus={loggedInStatus}
                token={token} /> */}
            <div className="container">

                <div className="alert-danger">{errMes}</div>
                <WinPlane />

                <GameBoard
                    gameStart={gameStart}
                    userName={user.username}
                    pStatus={pStatus}
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
                    {/* //  bet info */}
                    {/* <Bet /> */}


                    <Cash
                        moneyType={user.moneyType}
                        cash={user.cash}
                    />
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

                                {gameStart && (showSplit) ? <SplitBtn /> : ''}
                            </div>
                        </div>
                    </div>
                    <div className="col max-w-10">
                        <BetPop
                            moneyType={moneyType}
                            amount={betAmount}
                        />
                    </div>

                    <div className="col-5 m-t-23">
                        {/* //  btn4-6 */}
                        <div className="row">

                            {gameStart ? <StandBtn /> : ''}
                            {gameStart && (player1DD) ? <DDBtn /> : ''}
                            <DealBtn
                                color={(gameStart === true) && (game_status !== "Game Over") ? 'red' : 'green'}
                                text={(gameStart === true) && (game_status !== "Game Over") ? 'Hit' : 'Deal'}
                                onClick={(gameStart === true) && (game_status !== "Game Over") ? hitCard : Deal}
                            />
                        </div>
                    </div>
                </div>

                <div className="row m-t-25">
                    <div className="col ">
                        <BetUpBtn
                            onClick={BetUp}
                            disabledBtn={gameStart && (game_status !== "Game Over")}
                        />
                    </div>

                    <div className="col ">
                        <BetDownBtn
                            onClick={BetDown}
                            disabledBtn={gameStart && (game_status !== "Game Over")}
                        />
                    </div>
                </div>

            </div>

        </main>
    )
}

export default Game

