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

$(document).ready(function() {
  database.ref().on('value', function(childSnapshot) {
    console.log('css:', childSnapshot.val()); //todo : figure out why null

    var Address = childSnapshot.val().address;
    var postalCode = childSnapshot.val().postalCode;
    var Price = childSnapshot.val().Price;
    var numbBeds = childSnapshot.val().Beds;
    var numbBaths = childSnapshot.val().Baths;
    var Description = childSnapshot.val().Description;
    var Type = childSnapshot.val().Type;
    var Utilities = childSnapshot.val().Utilities;
    var Size = childSnapshot.val().Size;
    var searchValue = '';
    /////////////////////////////////////search bar
    $('.submit').on('click', function() {
      event.preventDefault();
      searchValue = $('.input')
        .val()
        .trim();
      console.log('sv:', searchValue);

      //now adding in if search keywords
      if (
        this.child('address')
          .getValue()
          .equals(searchValue) ||
        this.child('postalCode')
          .getValue()
          .equals(searchValue) ||
        this.child('Price')
          .getValue()
          .equals(searchValue) ||
        this.child('Beds')
          .getValue()
          .equals(searchValue) ||
        this.child('Baths')
          .getValue()
          .equals(searchValue) ||
        this.child('Type')
          .getValue()
          .equals(searchValue) ||
        this.child('Utilities')
          .getValue()
          .equals(searchValue) ||
        this.child('Size')
          .getValue()
          .equals(searchValue)
      ) {
        var card = $('.card-img-top');
        snapshot.child(searchValue).appendTo(card);
      }
      //ended if statement

      return false;
    });
  });
  ///////////////////

  //ended nav bar search on click function

  /////////////////////////////////////////////
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

    var newList = {
      address: Address,
      postalcode: postalCode,
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
    console.log('val:', childSnapshot.val());

    var Address = childSnapshot.val().address;
    var postalCode = childSnapshot.val().postalcode;
    var Price = childSnapshot.val().price;
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
  //end of document.ready function
});
