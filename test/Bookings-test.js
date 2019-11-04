const chai = require('chai');
const expect = chai.expect;

import testData from '../Data/testData';
import Bookings from '../src/Bookings';


describe('Bookings', () => {
  let bookings;

  beforeEach(() => {
    bookings = new Bookings(testData)
  });

  it('should be a function', () => {
    expect(Bookings).to.be.a('function');
  });

  it('should have access to all test data', () => {
    expect(bookings.data).to.eql(testData)
  });

  it('should return the number of available rooms for a given date', () => {
    expect(bookings.findNumberOfAvailableRooms('2019/09/30')).to.equal(28)
  })

  it('should return the available rooms for a given date', () => {
    expect(bookings.findAllRoomsAvailable('2019/09/30').length).to.equal(28)
  });

  it('should return the cost for a given room', () => {
    expect(bookings.findCostPerRoom(1)).to.equal(265.03)
  });

  it('should return the revenue from rooms rented for a given date', () => {
    expect(bookings.findTodaysRoomsRevenue('2019/09/30')).to.equal(572.48)
  });

  it('should return roomService revenue for a given date', () => {
    expect(bookings.findRoomServiceRevenue('2019/09/30')).to.equal(33.74)
  })

  it('should return the total revenue for a given date', () => {
    expect(bookings.findTotalRevenueForDate('2019/09/30')).to.equal(606.22)
  })

  it('should return the percentage of rooms booked for the day', () => {
    expect(bookings.findPercentRoomsBooked('2019/09/30')).to.equal(6.7)
  })

})