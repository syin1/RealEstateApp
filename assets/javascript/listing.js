var newList = {
  Address: Address,
  postalCode: postalCode,
  Price: Price,
  Beds: numbBeds,
  Baths: numbBaths,
  Description: Description,
  Type: Type,
  Utilities: Utilities,
  Size: Size
};
var config = {
  apiKey: 'AIzaSyAGwvEkUM7qJKhTtJfwo9cAKdCOhrD8lmc',
  authDomain: 'realestateapp-70bdf.firebaseapp.com',
  databaseURL: 'https://realestateapp-70bdf.firebaseio.com',
  projectId: 'realestateapp-70bdf',
  storageBucket: 'realestateapp-70bdf.appspot.com',
  messagingSenderId: '563256383606'
};
firebase.initializeApp(config);
var database = firebase.database();

//Size
var newSize = $('#size').html(newList.Size);
//Price
var newPrice = $('#price').html(newList.Price);
//Beds
var newBeds = $('#beds').html(newList.Beds);
//Description
var newDescription = $('#description').html(newList.Description);
//Type
var newType = $('#type').html(newList.Type);
//Utilities
var newUtlities = $('#utilities').html(newList.Utilities);
//PostalCode
var newPostalCode = $('#postalCode').html(newList.postalCode);
//Address
var newAddress = $('#address').html(newList.Address);
//Baths
var newBaths = $('#baths').html(newList.Baths);
//Back Button
$('#home').on('click', function() {
  location.href = 'index.html';
});
