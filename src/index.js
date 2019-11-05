import $ from 'jquery';

import Bookings from './Bookings'
import testData from '../Data/testData'


// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import HotelRepo from './HotelRepo';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

let bookings = new Bookings(testData)
let hotelRepo = new HotelRepo(testData.bookings, testData.rooms, testData.users)
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


$('.customer-reservations').text(showReservationDates(8))
$('.customer-total-expense').text('$ ' + hotelRepo.findTotalCustomerExpense(8))

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

function parseDate(date, divider) {
  let year = +(date.split(divider)[0]);
  let month = +(date.split(divider)[1]);
  let day = +(date.split(divider)[2]);
  if (day < 10 && month < 10) {
    return +(`${year}0${month}0${day}`);
  } else if (day < 10 && month >= 10){
    return +(`${year}${month}0${day}`);
  } else if (day >= 10 && month < 10){
    return +(`${year}0${month}${day}`);
  } else {
    return +(`${year}${month}${day}`);
  }
}


function stringifyDate(date) {
  let splitDate = date.toString().split('');
  let year = `${splitDate[0]}${splitDate[1]}${splitDate[2]}${splitDate[3]}`;
  let month = `${splitDate[4]}${splitDate[5]}`;
  let day = `${splitDate[6]}${splitDate[7]}`;
  return `${year}/${month}/${day}`
}

function sortDates(dates) {
  let parsedDates = [];
  dates.forEach(date => {
    parsedDates.push(parseDate(date, '/'));
  })
  return parsedDates.sort((a, b) => b - a).map(date => stringifyDate(date))
}

function showReservationDates(id) {
  let bookings = hotelRepo.findCustomerReservationHistory(id);
  let datesBooked = bookings.map( booking => booking.date)
  return sortDates(datesBooked).join(' | ')
}









