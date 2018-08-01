// reference to the database
var config = {
  apiKey: 'AIzaSyAGwvEkUM7qJKhTtJfwo9cAKdCOhrD8lmc',
  authDomain: 'realestateapp-70bdf.firebaseapp.com',
  databaseURL: 'https://realestateapp-70bdf.firebaseio.com',
  projectId: 'realestateapp-70bdf',
  storageBucket: 'realestateapp-70bdf.appspot.com',
  messagingSenderId: '563256383606'
};
// initializes the database
firebase.initializeApp(config);

var database = firebase.database();

// prevents the page from reloading
// identifying and grabbing the value from different form boxes and storing it in a variable
$('#button-id').on('click', function(event) {
  event.preventDefault();

  var Address = $('.card-title-address')
    .val()
    .trim();
  var postalCode = $('.card-subtitle-postalcode')
    .val()
    .trim();
  var Price = $('.card-subtitle mb-2 text-muted')
    .val()
    .trim();
  var numbBeds = $('.card-subtitle-beds')
    .val()
    .trim();
  var numbBaths = $('.card-subtitle-baths')
    .val()
    .trim();
  var Description = $('.card-text-description')
    .val()
    .trim();
  var Type = $('card-subtitle-type')
    .val()
    .trim();
  var Utilities = $('.card-subtitle-utilities')
    .val()
    .trim();
  var Size = $('card-subtitle-size')
    .val()
    .trim();

  // groups all of the different values in one variable or "listing"
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

  // pushes and saves all of the data to the database
  database.ref().push(newList);

  console.log(newList.Address);
  console.log(newList.postalCode);
  console.log(newList.Price);
  console.log(newList.numbBeds);
  console.log(newList.numbBaths);
  console.log(newList.Description);
  console.log(newList.Type);
  console.log(newList.Utilities);
  console.log(newList.Size);

  alert('Listing successfully added');

  // clearing all of the form boxes once the form is submitted
  $('.card-title-address').val('');
  $('.card-subtitle-postalcode').val('');
  $('.card-subtitle mb-2 text-muted').val('');
  $('.card-subtitle-beds').val('');
  $('.card-subtitle-baths').val('');
  $('.card-subtitle-type').val('');
  $('.card-subtitle-utilities').val('');
  $('.card-subtitle-size').val('');
  $('card-text-description').val('');
});

// takes a snapshot of the values in the boxes and saves them to the database
database.ref().on('child_added', function(childSnapshot) {
  console.log(childSnapshot.val());

  var Address = childSnapshot.val().Address;
  var postalCode = childSnapshot.val().postalCode;
  var Price = childSnapshot.val().Price;
  var numbBeds = childSnapshot.val().Beds;
  var numbBaths = childSnapshot.val().Baths;
  var Description = childSnapshot.val().Description;
  var Type = childSnapshot.val().Type;
  var Utilities = childSnapshot.val().Utilities;
  var Size = childSnapshot.val().Size;

  console.log(Address);
  console.log(postalCode);
  console.log(Price);
  console.log(numbBeds);
  console.log(numbBaths);
  console.log(Description);
  console.log(Type);
  console.log(Utilities);
  console.log(Size);

  // displays them in the html code and on the screen
  var newRow = $('<tr>').append(
    $('<td>').text(Address),
    $('<td>').text(postalCode),
    $('<td>').text(Price),
    $('<td>').text(numbBeds),
    $('<td>').text(numbBaths),
    $('<td>').text(Description),
    $('<td>').text(Type),
    $('<td>').text(Utilities),
    $('<td>').text(Size)
  );

  $('#employee-table > tbody').append(newRow);
});
