import React from 'react'
import Dealer from './Dealer'
import Player from './Player'
import SplitPlane from './SplitPlane'

function GameBoard({ gameStart, userName, pStatus, dStatus, game_status, player1card1,
    player1card2,
    player1DD,
    player1hit,
    dealerCard1,
    dealerCard2,
    player1Score1,
    player1Score2,
    dealerScore,
    showSplitBtn, showSplit, p1imgStyle, dimgStyle, player1cardsA, dealercardsA }) {

    const highlightHand = { backgroundColor: "orange" }
    const highlightHandOff = { backgroundColor: "" }



    return (
        <div className="row gameboard">
            <Player
                gameStart={gameStart}
                userName={userName}
                status={pStatus}
                player1card1={player1card1}
                player1card2={player1card2}
                player1DD={player1DD}
                player1hit={player1hit}
                player1Score1={player1Score1}
                player1Score2={player1Score2}
                showSplitBtn={showSplitBtn}
                imgStyle={p1imgStyle}
                player1cardsA={player1cardsA}
                highlightHand={gameStart ? highlightHand : highlightHandOff}
                game_status={game_status}
            />

            <Dealer
                gameStart={gameStart}
                status={dStatus}
                dealerCard1={dealerCard1}
                dealerCard2={dealerCard2}
                dealerScore={dealerScore}
                imgStyle={dimgStyle}
                dealercardsA={dealercardsA}
                highlightHand={gameStart ? highlightHand : highlightHandOff}
                game_status={game_status}
            />
            {showSplit ? <SplitPlane /> : ''}
        </div>
    )
}

export default GameBoard
