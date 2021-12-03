const Turn = require('./Turns');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = 0;
    this.endTime = 0;
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

  calculatePercentCorrect() {
    return Math.round((this.turns - this.incorrectGuesses.length) / this.turns * 100);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    this.timeEnd = Date.now();
    let durationOfGame = (this.timeEnd -= this.startTime);
    this.convertTime(durationOfGame);
  }

  convertTime(time) {
    var minutes = Math.floor(time / 60000);
    var seconds = ((time % 60000) / 1000).toFixed(0);
    console.log(`You've spent ${minutes} minutes and ${(seconds < 10 ? '0' : '')} ${seconds} seconds on this round`);
  }
}



module.exports = Round;