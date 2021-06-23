import React from 'react'

function Split() {
    return (
       
          <div className="row splitHand">
          {/* //  cardRow */}
          <div className="col-6 ps pad-25">
            {/* //  cardsP1 */}
            <div className="alert alert-info">----Split Player 1 hand----</div>
            <div className="row psr1">
              <div className="col-4">
                <img src="" alt="..." className="cards pc1" />
              </div>
              <div className="col card2">
                <img src="" alt="..." className="cards pc2" />
              </div>
            </div>
          </div>
        </div>
    )
}

export default Split
