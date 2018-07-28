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
    var postalCode = childSnapshot.val().postalcode;
    var Price = childSnapshot.val().price;
    var numbBeds = childSnapshot.val().beds;
    var numbBaths = childSnapshot.val().baths;
    var Description = childSnapshot.val().description;
    var Type = childSnapshot.val().type;
    var Utilities = childSnapshot.val().utilities;
    var Size = childSnapshot.val().size;
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

    var address = $('.card-title-address')
      .val()
      .trim();
    var postalcode = $('.card-subtitle-postalcode')
      .val()
      .trim();
    var price = $('.card-subtitle mb-2 text-muted')
      .val()
      .trim();
    var numbBeds = $('.card-subtitle-beds')
      .val()
      .trim();
    var numbBaths = $('.card-subtitle-baths')
      .val()
      .trim();
    var description = $('.card-text-description')
      .val()
      .trim();
    var type = $('card-subtitle-type')
      .val()
      .trim();
    var utilities = $('.card-subtitle-utilities')
      .val()
      .trim();
    var size = $('card-subtitle-size')
      .val()
      .trim();

    var newList = {
      address: Address,
      postalcode: postalCode,
      price: Price,
      beds: numbBeds,
      baths: numbBaths,
      description: Description,
      type: Type,
      utilities: Utilities,
      size: Size
    };

    database.ref().push(newList);

    console.log(newList.address);
    console.log(newList.postalcode);
    console.log(newList.price);
    console.log(newList.numbBeds);
    console.log(newList.numbBaths);
    console.log(newList.description);
    console.log(newList.type);
    console.log(newList.utilities);
    console.log(newList.size);

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

    var address = childSnapshot.val().address;
    var postalcode = childSnapshot.val().postalcode;
    var price = childSnapshot.val().price;
    var numbBeds = childSnapshot.val().beds;
    var numbBaths = childSnapshot.val().baths;
    var description = childSnapshot.val().description;
    var type = childSnapshot.val().type;
    var utilities = childSnapshot.val().utilities;
    var size = childSnapshot.val().size;

    console.log(address);
    console.log(postalcode);
    console.log(price);
    console.log(numbBeds);
    console.log(numbBaths);
    console.log(description);
    console.log(type);
    console.log(utilities);
    console.log(size);

    var newRow = $('<tr>').append(
      $('<td>').text(address),
      $('<td>').text(postalcode),
      $('<td>').text(price),
      $('<td>').text(numbBeds),
      $('<td>').text(numbBaths),
      $('<td>').text(description),
      $('<td>').text(type),
      $('<td>').text(utilities),
      $('<td>').text(size)
    );

    $('#employee-table > tbody').append(newRow);
  });
  //end of document.ready function
});
