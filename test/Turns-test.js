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
});