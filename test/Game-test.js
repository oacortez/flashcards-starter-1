const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe.only('Game', () => {
  let card1;
  let card2;
  let card3;
  let game;
  let deck;
  let round;

  beforeEach(() => {
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game(round);
  });

  it('Should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('Should be a instance of Game', () => {
    expect(game).to.be.a.instanceof(Game);
  });

  it('Should be instanciated with a null currentRound', () => {
    expect(game.currentRound).to.be.null;
  });

  it('Should create cards', () => {
    game.start();

    expect(round.deck).to.be.a('object');
  });

  it('Should put cards in deck', () => {
    game.start();

    expect(game.currentRound.deck).to.be.a.instanceof(Deck);
  });

  it('Should create a new round', () => {
    game.start();

    expect(game.currentRound).to.be.a.instanceof(Round);
  });
});