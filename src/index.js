import $ from 'jquery';
import './css/base.scss';
import Bookings from './Bookings'
import HotelRepo from './HotelRepo';

const bookingsPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
  .then(response => response.json());
const customerPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
  .then(response => response.json());
const roomsPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
  .then(response => response.json());

let roomsData;
let bookingsData;
let customerData;
let hotelRepo;
let bookings;
let customerId;
let roomNumber;

Promise.all([roomsPromise, bookingsPromise, customerPromise])
  .then(data => {
    roomsData = data[0].rooms;
    bookingsData = data[1].bookings;
    customerData = data[2].users;


    bookings = new Bookings(bookingsData, roomsData, customerData)
    hotelRepo = new HotelRepo(bookingsData, roomsData, customerData)
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
    // $('.customer-view').hide();
    $('.manager-view').hide();

    $('#manager-login-btn').click(directToChosenPage);
    $('#customer-login-btn').click(directToChosenPage);

    $('.display-todays-date').text(`${formattedDate}`)
    $('.rooms-available').text(`${bookings.findNumberOfAvailableRooms('2019/09/30')} rooms`);
    $('.occupancy-rate').text(`${bookings.findPercentRoomsBooked('2019/09/30')}  %`)
    $('.daily-revenue').text(`$ ${bookings.findTotalRevenueForDate('2019/09/30')}`)

    function captureCustomerId() {
      if ($('#email-input').val().includes('customer')) {
        customerId = ($('#email-input').val().slice(8, 10) * 1)
      };
      return customerId
    }

    function directToChosenPage(event) {
      captureCustomerId();
      let email = $('#email-input').val();
      let password = $('#password-input').val()
      if (event.target.id === 'manager-login-btn') {
        if (email === 'manager' && password === 'overlook2019') {
          $('.login-screen').hide();
          $('.manager-view').show();
        }
      };
      if (event.target.id === 'customer-login-btn') {

        if (email === 'customer50' && password === 'overlook2019') {
          $('.login-screen').hide();
          $('.customer-view').show();
        }
      }
      $('.customer-reservations').text(showReservationDates(customerId));
      $('.customer-total-expense').text('$ ' + hotelRepo.findTotalCustomerExpense(customerId).toFixed(2))
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
      } else if (day < 10 && month >= 10) {
        return +(`${year}${month}0${day}`);
      } else if (day >= 10 && month < 10) {
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

    function verifyValidDate(chosenDate) {
      let todayDate = parseDate(getDate(), '/');
      if (chosenDate > todayDate) {
        return true;
      } else {
        return false;
      }
    };

    function showReservationDates(id) {
      let bookings = hotelRepo.findCustomerReservationHistory(id);
      let datesBooked = bookings.map(booking => booking.date)
      return sortDates(datesBooked).join(' | ')
    }


    function showBookingError() {
      if(bookings.findNumberOfAvailableRooms() < 1) {
      $('.error-box').attr('hidden',false)
      }
      if(bookings.filterByRoomType(date, type).length < 1) {
        $('.error-box').attr('hidden',false)
      }
    }

    function displayAvailableRooms(date) {
      let available = bookings.findAllRoomsAvailable(date)
      available.forEach(room => {
        roomNumber = room.number
        // console.log(roomNumber)
        $('#display-rooms').append(
      `<div class='individual-room' id='${room.number}'>
      <h4>Room Number</b> : ${room.number}</h4>
      <h4>Room Type</b> : ${room.roomType}</h4>
      <h4>Number Of Beds</b> : ${room.numBeds}</h4>
      <h4>Bed Size</b> : ${room.bedSize}</h4>
      <h4>Price</b> : $ ${room.costPerNight}<h4/>
      <button class='book-this-room'>BOOK</button>
      </div>
      <br/>`
        )
      })
      $('.booking-block').hide()
    }

    $('.find-room-btn').click(() => {
      let guestInput = $('.start-date-input').val()
      let numDate = parseDate(guestInput, '-');
      let date = stringifyDate(numDate);
      if (verifyValidDate(numDate)) {
        $('#display-rooms').text('');
        displayAvailableRooms(date);
      } else {
        $('#display-rooms').text('');
        $('#display-rooms').append(`
      This date is invalid, please choose another
      `
        )
      }
    });


    $('.filter-btn').click(() => {
      
      let inputDate = $('.start-date-input').val()
      let numDate = parseDate(inputDate, '-');
      let date = stringifyDate(numDate);
      let filteredRooms = bookings.filterByRoomType(date, $('.filter-input').val());
      filteredRooms.forEach(room => {
        roomNumber = room.number
        // console.log(roomNumber)
        $('#display-filtered').append(
        `<div class='individual-room' id='${room.number}' type='submit'>
        <h4>Room Number : ${room.number} 
        <h4>Room Type</b> : ${room.roomType}</h4>
        <h4>Number Of Beds</b> : ${room.numBeds}</h4>
        <h4>Bed Size</b> : ${room.bedSize}</h4>
        <h4>Price</b> : $ ${room.costPerNight}<h4/>
        <button class='book-this-room'>BOOK</button>
        </div>
        <br/>`
        )
      })
      $('.booking-block').hide()
    })


    function postBooking() {
      let dateInput = $('.start-date-input').val()
      let numDate = parseDate(dateInput, '-');
      let bookedDate = stringifyDate(numDate);
      console.log(bookedDate)
      let postData = bookings.createBooking(50, bookedDate, roomNumber);
      console.log(postData)
      fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
        .then(() => console.log('room booked'))
        .catch(error => {
          console.log(error);
        });
    }

    function handlePost(e) {
      if (e.target.className && e.target.className === 'book-this-room') {
        postBooking()
      }
    }

    $('.book-room-section').click(handlePost)


  });



