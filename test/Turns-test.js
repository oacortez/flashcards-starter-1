const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turns');

describe('Turn', () => {
  
  let card, turn
  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('guess', card);
  });

  it('Should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('Should be an instance of Turn', () => {
    expect(turn).to.be.a.instanceof(Turn);
  });

  it('Should instantiate with two arguments a guess and a Card', () => {
    expect(turn.userGuess).to.equal('guess');
    expect(card).to.be.a.instanceof(Card);
  });

  it('Should return user guess', () => {
    expect(turn.returnGuess()).to.equal('guess');
  });

  it('Should return user card', () => {
    expect(turn.returnCard()).to.equal(card);
  });

  it('Should return true if user guess is correct', () => {
    const newTurn = new Turn('object', card);

    expect(newTurn.evaluateGuess()).to.be.true;
  });

  it('Should return false if user guess is incorrect', () => {
    expect(turn.evaluateGuess()).to.be.false;
  });

  it('Should return a string of "Incorrect!" if the user guess is false', () => {
    expect(turn.giveFeedback()).to.equal('Incorrect!');
  });

  it('Should return a string of "Correct!" if the user guess is true', () => {
    const newTurn = new Turn('object', card);

    expect(newTurn.giveFeedback()).to.equal('Correct!');
  });
});