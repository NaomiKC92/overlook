const chai = require('chai');
const expect = chai.expect;

import testData from '../Data/testData';
import Customer from '../src/Customer';

describe('Customer', () => {
  let customer;

  beforeEach(() => {
    customer = new Customer(testData.users[7].id, testData.users[7].name, testData.users)
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

  it('should return the user\'s name with a matching Id', () => {
    expect(customer.findName(8)).to.equal('Era Hand')
  })

  it('should only return the user\'s first name', () => {
    expect(customer.returnFirstNameOnly(8)).to.equal('Era')
  })

})