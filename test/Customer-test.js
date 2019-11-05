const chai = require('chai');
const expect = chai.expect;

import testData from '../Data/testData';
import Customer from '../src/Customer';

describe('Customer', () => {
  let customer;

  beforeEach(() => {
    customer = new Customer(testData.users[7].id, testData.users[7].name, testData)
  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should have access to the customer\'s Id', () => {
    expect(customer.id).to.eql(8)
  });

  it('should have access to the customer\'s name', () => {
    expect(customer.name).to.equal('Era Hand')
  })

})