import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'


$('.login-screen').hide();
$('.customer-view').hide();
// $('.manager-view').hide();


$('#manager-login-btn').click(directToChosenPage);
$('#customer-login-btn').click(directToChosenPage);


function directToChosenPage(event) {
  event.preventDefault();
  let email = $('#email-input').val();
  let password = $('#password-input').val() 
  if(event.target.id === 'manager-login-btn') {
    if(email === 'manager' && password === 'overlook2019') {
    $('.login-screen').hide();
    $('.manager-view').show();
    }
  };
    if(event.target.id === 'customer-login-btn') {
      if(email === 'customer50' && password === 'overlook2019') {
        console.log('customer logged in')
      $('.login-screen').hide();
      $('.customer-view').show();
    }
  }
}


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
