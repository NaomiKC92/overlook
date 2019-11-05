class HotelRepo {
  constructor(bookings, rooms, customers) {
    this.bookings = bookings;
    this.rooms = rooms;
    this.customers = customers
  }

  findCustomerReservationHistory(id) {
    return this.bookings.filter( booking => booking.userID === id)
  }

  findTotalCustomerExpense(id) {
    let allRes = this.findCustomerReservationHistory(id)
    return this.rooms.reduce( (acc, room) => {
      allRes.forEach( res => {
        if(res.roomNumber === room.number) {
          acc += room.costPerNight
        }
      })
      return acc
    }, 0)
  }



}


export default HotelRepo;