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
  }
}



module.exports = Round;