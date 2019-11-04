const chai = require('chai');
const expect = chai.expect;

import testData from '../Data/testData';
import HotelRepo from '../src/HotelRepo';


describe.only('HotelRepo', () => {
  let hotelRepo;

  beforeEach(() => {
    hotelRepo = new HotelRepo(testData.bookings, testData.rooms, testData.users)
  });

  it('should be a function', () => {
    expect(HotelRepo).to.be.a('function');
  })

  it('should have access to all booking data', () => {
    expect(hotelRepo.bookings).to.eql(testData.bookings);
  })

  it('should have access to all rooms data', () => {
    expect(hotelRepo.rooms).to.eql(testData.rooms);
  })

  it('should have access to all customer data', () => {
    expect(hotelRepo.customers).to.eql(testData.users);
  })

});