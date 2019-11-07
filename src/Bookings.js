class Bookings {
  constructor(bookings, rooms, roomServices) {
    this.bookings = bookings;
    this.rooms = rooms;
    this.roomServices = roomServices;
  }

  findNumberOfAvailableRooms(date) {
    let openRooms = this.bookings.filter( booking => booking.date !== date);
    return openRooms.length
  }

  findAllRoomsAvailable(date) {
    let openRooms = this.bookings.filter( booking => booking.date !== date);
    return openRooms.reduce((acc, openRoom) => {
      this.rooms.forEach(room => {
        if(openRoom.roomNumber === room.number && !acc.includes(room)) {
          acc.push(room)
        }
      })
      return acc
    }, [])
  }

  findCostPerRoom(roomNum) {
    let chosenRoom = this.rooms.find( room => room. number === roomNum);
    return chosenRoom.costPerNight
  }

  findTodaysRoomsRevenue(date) {
    let roomNums = []
    this.bookings.filter( booking => {
      if(booking.date === date) {
        roomNums.push(booking.roomNumber)
      }
    });
    let revenueFromRooms = roomNums.reduce( (acc, room) => {
      this.rooms.map( booked => {
        if(booked.number === room) {
          acc += booked.costPerNight
        }
      })
      return acc
    }, 0)
      return revenueFromRooms.toFixed(2)
  }

  findPercentRoomsBooked(date) {
    let bookedRooms = this.bookings.filter( booking => booking.date === date)
    console.log(bookedRooms)
    return +((bookedRooms.length / this.rooms.length) * 100).toFixed(1)
  }

  filterByRoomType(date, type) {
    let availableRooms = this.findAllRoomsAvailable(date);
    return availableRooms.filter( room => room.roomType === type)
  }

  createBooking(id, date, room) {
    return {
      userID: id,
      date: date,
      roomNumber: room

    }
  }

}


export default Bookings;