// var newList = {
//   Address: address,
//   postalCode: postalCode,
//   Price: price,
//   Beds: beds,
//   Baths: baths,
//   Description: description,
//   Type: type,
//   Utilities: utilities,
//   Size: size,
//   token: '0'
// };
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
console.log('thru');

database
  .ref()
  .orderByChild('Token')
  .equalTo('1')
  .once('value', function(childSnapshot) {
    snapshot.forEach(function(userSnapshot) {
      console.log(userSnapshot.val().Address);
      var Address = userSnapshot.val().Address;
      var Baths = userSnapshot.val().Baths;
      var Beds = userSnapshot.val().Beds;
      var Description = userSnapshot.val().Description;
      var postalCode = userSnapshot.val().postalCode;
      var Price = userSnapshot.val().Price;
      var Type = userSnapshot.val().Type;
      var Utilities = userSnapshot.val().Utilities;
      var Size = userSnapshot.val().Size;

      $('#address').html(Address);
      $('#bath').html(Baths);
      $('#beds').html(Beds);
      $('#description').html(Description);
      $('#postalCode').html(postalCode);
      $('#price').html(Price);
      $('#type').html(Type);
      $('#utilities').html(Utilities);
      $('#size').html(Size);
    });
  });

//Back Button
$('#home').on('click', function() {
  location.href = 'index.html';
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myButton');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
$('#myButton').on('click', function() {
  console.log('clicked agent');
  //modal.style.display = 'block';
});

// When the user clicks on <span> (x), close the modal
$('<span>').on('click', function() {
  modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
