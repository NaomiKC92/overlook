const chai = require('chai');
const expect = chai.expect;

import testData from '../Data/testData';
import Manager from '../src/Manager';

describe('Manager', () => {
  let manager;

  beforeEach(() => {
    manager = new Manager(testData.users, testData.bookings, testData.rooms)
  });

  it('should be a function', () => {
    expect(Manager).to.be.a('function');
  });

  it('should have access to all data', () => {
    expect(manager.customersData).to.eql(testData.users);
    expect(manager.bookingsData).to.eql(testData.bookings);
    expect(manager.roomsData).to.eql(testData.rooms);
  });

})