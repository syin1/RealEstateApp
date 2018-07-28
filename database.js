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

    //console.log(newList.address);
    //console.log(newList.postalcode);
    //console.log(newList.price);
    //console.log(newList.numbBeds);
    //console.log(newList.numbBaths);
    //console.log(newList.description);
    //console.log(newList.type);
    //console.log(newList.utilities);
    //console.log(newList.size);

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
    //console.log('val:', childSnapshot.val());

    var address = childSnapshot.val().address;
    var postalcode = childSnapshot.val().postalcode;
    var price = childSnapshot.val().price;
    var numbBeds = childSnapshot.val().beds;
    var numbBaths = childSnapshot.val().baths;
    var description = childSnapshot.val().description;
    var type = childSnapshot.val().type;
    var utilities = childSnapshot.val().utilities;
    var size = childSnapshot.val().size;

    //console.log(address);
    //console.log(postalcode);
    //console.log(price);
    //console.log(numbBeds);
    //console.log(numbBaths);
    //console.log(description);
    //console.log(type);
    //console.log(utilities);
    //console.log(size);

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
  database.ref().on('value', function(childSnapshot) {
    console.log('Value objects:', childSnapshot.val()); //todo : figure out why null

    var address = childSnapshot.val().address;
    var postalCode = childSnapshot.val().postalcode;
    var price = childSnapshot.val().price;
    var numbBeds = childSnapshot.val().beds;
    var numbBaths = childSnapshot.val().baths;
    var description = childSnapshot.val().description;
    var type = childSnapshot.val().type;
    var utilities = childSnapshot.val().utilities;
    var size = childSnapshot.val().size;
    var information = '';
    var searchValue = '';

    var rootRef = database.ref();
    var urlRef = rootRef.child('real-estate-app-9e4e6');
    urlRef.once('value', function(child) {
      childSnapshot.forEach(function(child) {
        //console.log('child: ' + child.val());//give object object
        console.log('rootref:' + child.val());
        $('.submit').on('click', function() {
          event.preventDefault();
          information = '';
          searchValue = $('.input')
            .val()
            .trim();
          if (
            searchValue === child.val().address ||
            searchValue === child.val().baths ||
            searchValue === child.val().beds ||
            searchValue === child.val().description ||
            searchValue === child.val().postalcode ||
            searchValue === child.val().price ||
            searchValue === child.val().size ||
            searchValue === child.val().type ||
            searchValue === child.val().utilities
          ) {
            //console.log('hopefully works' + child.val(searchValue));
            console.log('works ');
          } else {
            console.log('not in database');
          }

          return false;
        });
      });
    });
    /////////////////////////////////////search bar
  });
  ///////////////////

  //ended nav bar search on click function

  /////////////////////////////////////////////
  //end of document.ready function
});
