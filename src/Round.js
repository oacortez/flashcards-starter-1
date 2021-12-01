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
    this.currentCard = this.deck.cards[this.turns];
    // console.log(this.deck)
    // Dont understand [this.turns] on line 18
  }
}



module.exports = Round;