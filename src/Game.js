const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = null;
    this.time = 0;
  }

  start() {
    const newCards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer);
    });

    const deck = new Deck(newCards);
    this.currentRound = new Round(deck);

    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
    this.currentRound.startTime = this.timer();
  }

  timer() {
    return this.time = Date.now();
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;