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

$('#button-id').on('click', function(event) {
  event.preventDefault();

  var Address = $('#employee-name-input')
    .val()
    .trim();
  var postalCode = $('#role-input')
    .val()
    .trim();
  var Price = $('#rate-input')
    .val()
    .trim();
  var numbBeds = $('#rate-input')
    .val()
    .trim();
  var numbBaths = $('#rate-input')
    .val()
    .trim();
  var Description = $('#rate-input')
    .val()
    .trim();
  var Type = $('#rate-input')
    .val()
    .trim();
  var Utilities = $('#rate-input')
    .val()
    .trim();
  var Size = $('#rate-input')
    .val()
    .trim();

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

  $('#employee-name-input').val('');
  $('#role-input').val('');
  $('#start-input').val('');
  $('#rate-input').val('');
  $('#rate-input').val('');
  $('#rate-input').val('');
  $('#rate-input').val('');
  $('#rate-input').val('');
  $('#rate-input').val('');
});

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
