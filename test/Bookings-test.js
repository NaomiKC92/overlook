const chai = require('chai');
const expect = chai.expect;

import testData from '../Data/testData';
import Bookings from '../src/Bookings';


describe('Bookings', () => {
  let bookings;

  beforeEach(() => {
    bookings = new Bookings(testData.bookings, testData.rooms, testData.roomServiceOrders)
  });

  it('should be a function', () => {
    expect(Bookings).to.be.a('function');
  });

  it('should return the number of available rooms for a given date', () => {
    expect(bookings.findNumberOfAvailableRooms('2019/09/30')).to.equal(28)
  })

  it('should return the available rooms for a given date', () => {
    expect(bookings.findAllRoomsAvailable('2019/09/30').length).to.equal(25)
  });

  it('should return the cost for a given room', () => {
    expect(bookings.findCostPerRoom(1)).to.equal(265.03)
  });

  it('should return the revenue from rooms rented for a given date', () => {
    expect(bookings.findTodaysRoomsRevenue('2019/09/30')).to.equal(572.48)
  });

  it('should return the percentage of rooms booked for the day', () => {
    expect(bookings.findPercentRoomsBooked('2019/09/30')).to.equal(6.7)
  })

  it('should return rooms by type searched for', () => {
    expect(bookings.filterByRoomType('2019/09/30', 'suite').length).to.equal(5)
  })

  it('should return an object with the user\'s data who the room was booked for', () => {
    expect(bookings.createBooking(8, '2019/09/30', 23)).to.eql({
      userID: 8,
      date: '2019/09/30',
      roomNumber: 23
    })
  })

})