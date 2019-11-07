class Manager {
  constructor(customersData, bookingsData, roomsData) {
    this.customersData = customersData;
    this.bookingsData = bookingsData;
    this.roomsData = roomsData;
  }


  deleteBooking(reservation) {
    fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation)
    })
      .then(response => console.log('The reservation has been deleted'))
      .catch(err => console.log(err));
  }
}




  export default Manager;