class Turn {
  constructor(guess, card) {
    this.userGuess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.userGuess;
  }
}

module.exports = Turn;