const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe.only('Round', () => {

  let card1, card2, card3, deck, round
  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('Should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('Should be a instance of Round', () => {
    expect(round).to.be.a.instanceof(Round);
  });

  it('Should start out with first card', () => {
    expect(round.currentCard).to.equal(card1);
  });
  
  it('Should return current card being played', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('Should start out with 0 turns', () => {
    expect(round.turns).to.equal(0);
  });

  it('Should start with no incorrect guesses', () => {
    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('Should update turns when user makes a guess', () => {
    round.takeTurn('guess');
    expect(round.turns).to.equal(1);
    round.takeTurn('guess');
    expect(round.turns).to.equal(2);
    round.takeTurn('guess');
    expect(round.turns).to.equal(3);
  });

  it('Should update card when user makes a guess', () => {
    round.takeTurn('guess');
    expect(round.currentCard).to.equal(card2);
    round.takeTurn('guess');
    expect(round.currentCard).to.equal(card3);



  });
});