$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDYI4Fjm_RWQadwHH7KdTJGSErId9aUJKY',
    authDomain: 'real-estate-app-9e4e6.firebaseapp.com',
    databaseURL: 'https://real-estate-app-9e4e6.firebaseio.com',
    projectId: 'real-estate-app-9e4e6',
    storageBucket: 'real-estate-app-9e4e6.appspot.com',
    messagingSenderId: '1087918608727'
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $('#edit').hide();
  $('#delete').hide();

  var address = sessionStorage.getItem('address');
  var baths = sessionStorage.getItem('baths');
  var beds = sessionStorage.getItem('beds');
  var description = sessionStorage.getItem('description');
  var postalcode = sessionStorage.getItem('postalcode');
  var price = sessionStorage.getItem('price');
  var size = sessionStorage.getItem('size');
  var type = sessionStorage.getItem('type');
  var utilities = sessionStorage.getItem('utilities');
  var postEmail = sessionStorage.getItem('email');

  var datakey = sessionStorage.getItem('data-key');

  var imageno = sessionStorage.getItem('image-no');
  var loginEmail = sessionStorage.getItem('loginEmail');

  $('#detailimage1').append(
    "<img class='d-block w-100' src='assets/images/details/" +
      imageno +
      "/1.jpg' height='500' width='500' alt='First slide'>"
  );
  $('#detailimage2').append(
    "<img class='d-block w-100' src='assets/images/details/" +
      imageno +
      "/2.jpg' height='500' width='500' alt='First slide'>"
  );
  $('#detailimage3').append(
    "<img class='d-block w-100' src='assets/images/details/" +
      imageno +
      "/3.jpg' height='500' width='500' alt='First slide'>"
  );
  $('#detailimage4').append(
    "<img class='d-block w-100' src='assets/images/details/" +
      imageno +
      "/4.jpg' height='500' width='500' alt='First slide'>"
  );

  $('#address').text(address);
  $('#baths').text(baths);
  $('#beds').text(beds);
  $('#description').text(description);
  $('#postalcode').text(postalcode);
  $('#price').text(price);
  $('#size').text(size);
  $('#type').text(type);
  $('#utilities').text(utilities);

  console.log('loginEmail', loginEmail);
  console.log('postEmail', postEmail);

  if (loginEmail === postEmail) {
    $('#edit').show();
    $('#delete').show();
  }

  $(document.body).on('click', '#edit', function() {
    window.location.href = 'editlisting.html';
  });

  $(document.body).on('click', '#delete', function() {
    database
      .ref()
      .child(datakey)
      .remove();

    window.location.href = 'index.html';
  });

  $(document.body).on('click', '#gotohome', function() {
    window.location.href = 'index.html';
  });
});
