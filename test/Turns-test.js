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
});