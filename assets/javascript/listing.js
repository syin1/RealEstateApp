// var newList = {
//   Address: address,
//   postalCode: postalCode,
//   Price: price,
//   Beds: beds,
//   Baths: baths,
//   Description: description,
//   Type: type,
//   Utilities: utilities,
//   Size: size
// };
var config = {
  apiKey: 'AIzaSyAGwvEkUM7qJKhTtJfwo9cAKdCOhrD8lmc',
  authDomain: 'real-estate-app-9e4e6.firebaseapp.com',
  databaseURL: 'https://real-estate-app-9e4e6.firebaseio.com/',
  projectId: 'real-estate-app-9e4e6',
  storageBucket: 'real-estate-app-9e4e6.appspot.com',
  messagingSenderId: '563256383606'
};
firebase.initializeApp(config);
var database = firebase.database();
database
  .ref()
  .orderByChild('address')
  .equalTo(/**/)
  .once('child_added', function(childSnapshot) {
    var Address = childSnapshot.val().address;
    var Baths = childSnapshot.val().baths;
    var Beds = childSnapshot.val().beds;
    var Description = childSnapshot.val().description;
    var postalCode = childSnapshot.val().postalCode;
    var Price = childSnapshot.val().price;
    var Type = childSnapshot.val().type;
    var Utilities = childSnapshot.val().utilities;
    var Size = childSnapshot.val().size;

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
