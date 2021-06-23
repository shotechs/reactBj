import React from 'react'

function BetPop({moneyType, amount}) {



    return (
        <div className="betpop">
              {/* //  image $1 */}
              <svg
              className="bd-placeholder-img rounded-circle"
              width="90"
              height="90"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Completely round image: 75x75"
            >
              <title>BET BG</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
              <text x="30%" y="48%" fill="#dee2e6" dy=".3em">
                BET {moneyType}
               {amount}
              </text>
            </svg>
        </div>
    )
}

export default BetPop
