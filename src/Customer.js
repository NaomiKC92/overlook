class Customer {
  constructor(id, name, data) {
    this.id = id;
    this.name = name;
  }
}


export default Customer;




// const bookingsPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
// .then( response => response.json());

// const usersPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
//   .then( response => response.json());
  
// const roomsPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
//   .then( response => response.json());


//   Promise.all([bookingsPromise, usersPromise, roomsPromise])
//   .then(dataSet => Promise.all(dataSet.map(dataSet => dataSet.json())))
//   .then(allData => {
//     let customers = allData.find(data => data.hasOwnProperty('users')).users;
//     let roomInfo = allData.find(data => data.hasOwnProperty('rooms')).rooms;
//     let bookingInfo = allData.find(data => data.hasOwnProperty('bookings')).bookings;
//     let roomServices = allData.find(data => data.hasOwnProperty('roomServices')).roomServices;
//     hotel = new Hotel(customers, roomInfo, bookingInfo, roomServices, date);
//     orders = new Orders(date, roomServices);
//     bookings = new Bookings(date, bookingInfo, roomInfo)
//   })
//   .then(() => onLoadHandler());


// function fetchData(dataType) {
//   const baseUrl = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904/';
//   const promise = fetch(baseUrl + `${dataType}`)
//     .then( response => response.json())
//   return promise
// }

// fetchData('users/users')
//   .then(user => {
//     // console.log(user.users[0])
//   })
//   .catch(error => console.log('ERROR'))
