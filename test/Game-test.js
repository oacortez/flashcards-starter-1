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
    game = new Game();
  });

  it('Should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('Should be a instance of Game', () => {
    expect(game).to.be.a.instanceof(Game);
  });
});