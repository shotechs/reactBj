import React from 'react'

function Dealer({ gameStart, status, dealerCard1,
  dealerCard2, dealerScore, imgStyle, dealercardsA, highlightHand, game_status }) {
  let defaultCard = "assets\\cards\\cardBack.png"
  const defaultStyle = { color: "red" }
  return (
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ds" style={status === "true" ? highlightHand : defaultStyle}>
      <div className="col detxt alert alert-info">Dealer : {game_status === "Game Over" ? dealerScore : ""}, {status}</div>
      <div className="row dsr1  align-items-center">
        {dealercardsA.map((card, i) => {
          // Return the element. Also pass key   
          if (i === 0 && (game_status === "Game Over")) {
            defaultCard = "assets\\cards\\" + card + ".png"
          }

          return (
            <div className="col cards_w" key={i}>
              <img
                src={((gameStart) && (i === 1)) ? "assets\\cards\\" + card + ".png" : defaultCard}
                alt={"Dealer card " + (i + 1)}
                className="cards dc1"
                style={gameStart ? imgStyle[i] : defaultStyle}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dealer
