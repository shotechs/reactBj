import React from 'react'

function Player({ gameStart, userName, status, player1card1, player1card2, player1Score1,
  player1Score2, player1DD,
  player1hit, showSplitBtn, imgStyle, player1cardsA, highlightHand, game_status }) {

  const defaultCard = "assets\\cards\\cardBack.png"
  const defaultStyle = { color: "red" }

  //put cards on row 2
  const playerRow2 = () => {
    if (player1hit === 4) {
      (<div className="row psr1 align-items-center" >
        {player1cardsA.map((card, i) => {
          //  console.log("Entered");
          // Return the element. Also pass key     
          return (
            (() => {
              if ((i >= 4) && (i <= 6)) {
                <div className="col cards_w" key={i}>
                  <img
                    src={gameStart ? "assets\\cards\\" + card + ".png" : defaultCard}
                    alt={"Player card " + (i + 1)}
                    className="cards pc1"
                    style={gameStart ? imgStyle[i] : defaultStyle}
                  />
                </div>
              }
            }
            )
          )
        })} </div>
      )
    }
    return false
  }

  //put cards on row 3
  const playerRow3 = () => {
    if (player1hit === 7) {
      (<div className="row psr1 align-items-center" >
        {player1cardsA.map((card, i) => {
          //  console.log("Entered");
          // Return the element. Also pass key     
          return (
            (() => {
              if ((i >= 7) && (i <= 9)) {
                <div className="col cards_w" key={i}>
                  <img
                    src={gameStart ? "assets\\cards\\" + card + ".png" : defaultCard}
                    alt={"Player card " + (i + 1)}
                    className="cards pc1"
                    style={gameStart ? imgStyle[i] : defaultStyle}
                  />
                </div>
              }
            }))
        })}</div>
      )
    }
    return false
  }

  // start output
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 .col-xs-12 ps" style={status === "true" ? highlightHand : defaultStyle}>
      <div className="col p1txt alert alert-info">{userName} : {game_status === "Game Over" ? player1Score1 : ""}, {status}</div>

      {/* //  cardsP1 */}
      <div className="row psr1 align-items-center" >
        {
          player1cardsA.map((card, i) => {
            //  console.log("Entered");
            if (i <= 3) {
              return (
                <div className="col cards_w" key={i}>
                  <img
                    src={gameStart ? "assets\\cards\\" + card + ".png" : defaultCard}
                    alt={"Player card " + (i + 1)}
                    className="cards pc1"
                    style={gameStart ? imgStyle[i] : defaultStyle}
                  />
                </div>)
            }
            return false
          })
        }
      </div>


      {playerRow2()}

      {playerRow3()}

    </div>

  )

}

export default Player
