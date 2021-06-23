import React from 'react'
import Button from '../custom/Button'

function Help({ onClick }) {
  return (
    <>

      <Button
        css={"btn btn-light btn-block"}
        text={"HELP"}
        onClick={onClick}
        modal={"modal"}
        target={"#helpModal"}
      />

      <div
        className="modal fade"
        id="helpModal"
        tabIndex="-1"
        aria-labelledby="helpModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="helpModalLabel">HOW TO PLAY</h5>
              <button
                type="button"
                className="btn btn-secondary close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h4>
                OBJECT OF THE GAME
              </h4>
              <p>
                Each participant attempts to beat the dealer by getting a count as
                close to 21 as possible, without going over 21.
              </p>

              <h4>CARD VALUES/SCORING</h4>
              <p>
                It is up to each individual player if an ace is worth 1 or 11.
                Face cards are 10 and any other card is its pip value.
              </p>

              <h4>BETTING</h4>
              <p>
                Before the deal begins, each player places a bet.
              </p>

              <h4>THE SHUFFLE</h4>
              <p>
                Is Random cards.
              </p>

              <h4>THE DEAL</h4>
              <p>
                When all the players have placed their bets, the dealer gives one
                card face up to each player in rotation clockwise. Another round
                of cards is then dealt face up to each player, but the dealer
                takes the second card face down. Thus, each player except the
                dealer receives two cards face up, and the dealer receives one
                card face up and one card face down.
              </p>

              <h4>THE PLAY</h4>
              <p>
                The player to the left goes first and must decide whether to
                "stand" (not ask for another card) or "hit" (ask for another card
                in an attempt to get closer to a count of 21, or even hit 21
                exactly). Thus, a player may stand on the two cards originally
                dealt to them, or they may ask the dealer for additional cards,
                one at a time, until deciding to stand on the total (if it is 21
                or under), or goes "bust" (if it is over 21). In the latter case,
                the player loses and the dealer collects the bet wagered. The
                dealer then turns to the next player to their left and serves them
                in the same manner.<br /><br />

                The combination of an ace with a card other than a ten-card is
                known as a "soft hand," because the player can count the ace as a
                1 or 11, and either draw cards or not. For example with a "soft
                17" (an ace and a 6), the total is 7 or 17. While a count of 17 is
                a good hand, the player may wish to draw for a higher total. If
                the draw creates a bust hand by counting the ace as an 11, the
                player simply counts the ace as a 1 and continues playing by
                standing or "hitting" (asking the dealer for additional cards, one
                at a time).
              </p>

              <h4>THE DEALER'S PLAY</h4>
              <p>
                When the dealer has served every player, the dealers face-down
                card is turned up. If the total is 17 or more, it must stand. If
                the total is 16 or under, they must take a card. The dealer must
                continue to take cards until the total is 17 or more, at which
                point the dealer must stand. If the dealer has an ace, and
                counting it as 11 would bring the total to 17 or more (but not
                over 21), the dealer must count the ace as 11 and stand. The
                dealer's decisions, then, are automatic on all plays, whereas the
                player always has the option of taking one or more cards.
              </p>

              <h4>SETTLEMENT</h4>
              <p>
                A bet once paid and collected is never returned. Thus, one key
                advantage to the dealer is that the player goes first. If the
                player goes bust, they have already lost their wager, even if the
                dealer goes bust as well. If the dealer goes over 21, the dealer
                pays each player who has stood the amount of that player's bet. If
                the dealer stands at 21 or less, the dealer pays the bet of any
                player having a higher total (not exceeding 21) and collects the
                bet of any player having a lower total. If there is a stand-off (a
                player having the same total as the dealer), no chips are paid out
                or collected.
              </p>

              <h4>BASIC STRATEGY</h4>
              <p>
                Winning tactics in Blackjack require that the player play each
                hand in the optimum way, and such strategy always takes into
                account what the dealer's upcard is. When the dealer's upcard is a
                good one, a 7, 8, 9, 10-card, or ace for example, the player
                should not stop drawing until a total of 17 or more is reached.
                When the dealer's upcard is a poor one, 4, 5, or 6, the player
                should stop drawing as soon as he gets a total of 12 or higher.
                The strategy here is never to take a card if there is any chance
                of going bust. The desire with this poor holding is to let the
                dealer hit and hopefully go over 21. Finally, when the dealer's up
                card is a fair one, 2 or 3, the player should stop with a total of
                13 or higher.
                <br /><br />
                With a soft hand, the general strategy is to keep hitting until a
                total of at least 18 is reached. Thus, with an ace and a six (7 or
                17), the player would not stop at 17, but would hit.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Help
