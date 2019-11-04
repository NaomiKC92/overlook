import $ from 'jquery';

import Bookings from './Bookings'
import testData from '../Data/testData'


// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

let bookings = new Bookings(testData)
let date = getDate();
let today = new Date();

const dateObject = new Date(today);
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const formattedDate = dateObject.toLocaleString('en', options)


$('.login-screen').hide();
$('.customer-view').hide();
// $('.manager-view').hide();


$('#manager-login-btn').click(directToChosenPage);
$('#customer-login-btn').click(directToChosenPage);

$('.display-todays-date').text(`${formattedDate}`)
$('.rooms-available').text(`${bookings.findNumberOfAvailableRooms('2019/09/30')} rooms`);
$('.occupancy-rate').text(`${bookings.findPercentRoomsBooked('2019/09/30')}  %`)
$('.daily-revenue').text(`$ ${bookings.findTotalRevenueForDate('2019/09/30')}`)

function directToChosenPage(event) {
  event.preventDefault();
  let email = $('#email-input').val();
  let password = $('#password-input').val() 
  if(event.target.id === 'manager-login-btn') {
    // if(email === 'manager' && password === 'overlook2019') {
    $('.login-screen').hide();
    $('.manager-view').show();
    // }
  };
  if(event.target.id === 'customer-login-btn') {
    // if(email === 'customer50' && password === 'overlook2019') {
      console.log('customer logged in')
      $('.login-screen').hide();
      $('.customer-view').show();
    // }
  }
}

function getDate() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  let thisDay = yyyy + '/' + mm + '/' + dd;
  return thisDay;
}


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
