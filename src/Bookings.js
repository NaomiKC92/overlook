class Bookings {
  constructor(data) {
    this.data = data;
  }

  findNumberOfAvailableRooms(date) {
    let openRooms = this.data.bookings.filter( booking => booking.date !== date);
    return openRooms.length
  }

  findAllRoomsAvailable(date) {
    let openRooms = this.data.bookings.filter( booking => booking.date !== date);
    return openRooms.reduce((acc, openRoom) => {
      this.data.rooms.forEach(room => {
        if(openRoom.roomNumber === room.number) {
          acc.push(room)
        }
      })
      return acc
    }, [])
  }

  findCostPerRoom(roomNum) {
    let chosenRoom = this.data.rooms.find( room => room. number === roomNum);
    return chosenRoom.costPerNight
  }

  findTodaysRoomsRevenue(date) {
    let roomNums = []
    this.data.bookings.filter( booking => {
      if(booking.date === date) {
        roomNums.push(booking.roomNumber)
      }
    });
    let revenueFromRooms = roomNums.reduce( (acc, room) => {
      this.data.rooms.map( booked => {
        if(booked.number === room) {
          acc += booked.costPerNight
        }
      })
      return acc
    }, 0)
      return revenueFromRooms
  }

  findRoomServiceRevenue(date) {
    return this.data.roomServiceOrders.reduce( (acc, order) => {
      if(order.date === date) {
        acc += order.totalCost
      }
      return acc
    }, 0)
  }

  findTotalRevenueForDate(date) {
    let roomsRev = this.findTodaysRoomsRevenue(date);
    let roomServiceRev = this.findRoomServiceRevenue(date);
    return roomsRev + roomServiceRev
  }

  findPercentRoomsBooked(date) {
    let bookedRooms = this.data.bookings.filter( booking => booking.date === date)
    return +((bookedRooms.length / this.data.rooms.length) * 100).toFixed(1)
  }


}


export default Bookings;