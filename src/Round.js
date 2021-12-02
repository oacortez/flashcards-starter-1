const Turn = require('./Turns');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.turns++;
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id);
    }
    this.currentCard = this.deck.cards[this.turns];
    return turn.giveFeedback();
  }
}



module.exports = Round;