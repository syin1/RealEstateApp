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

    var address = $('#employee-name-input')
      .val()
      .trim();
    var postalcode = $('#role-input')
      .val()
      .trim();
    var price = $('#rate-input')
      .val()
      .trim();
    var numbBeds = $('#rate-input')
      .val()
      .trim();
    var numbBaths = $('#rate-input')
      .val()
      .trim();
    var description = $('#rate-input')
      .val()
      .trim();
    var type = $('#rate-input')
      .val()
      .trim();
    var utilities = $('#rate-input')
      .val()
      .trim();
    var size = $('#rate-input')
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

  /* database.ref().on('child_added', function(childSnapshot) {
    //console.log('val:', childSnapshot.val());

    //console.log(address);
    //console.log(postalcode);
    //console.log(price);
    //console.log(numbBeds);
    //console.log(numbBaths);
    //console.log(description);
    //console.log(type);
    //console.log(utilities);
    //console.log(size);
    var dom = function() {
      var row = $('<div>').addClass('row');
      var colmd = $('<div>').addClass('col-md-6');
      var card = $('<div>')
        .addClass('card')
        .css('width', '18rem');
      var img = $('<img>')
        .addClass('card-img-top')
        .attr('src', 'images/pikachutest.png');
      var cardBody = $('<div>');
      var h1 = $('<h1>')
        .addClass('card-title-address')
        .append(address);
      var h2 = $('<h7>')
        .addClass('card - subtitle - postalcode')
        .append(postalCode);
      var h3 = $('<h2>')
        .addClass('card-subtitle mb-2 text-muted ')
        .append(price);
      var h4 = $('<h3>')
        .addClass('card-subtitle-beds ')
        .append(numbBeds);
      var h5 = $('<h4>')
        .addClass('card-subtitle-baths')
        .append(numbBaths);
      var h6 = $('<h6>')
        .addClass('card-subtitle-type')
        .append(type);
      var h7 = $('<h7>')
        .addClass('card-subtitle-utilities')
        .append(utilities);
      var h8 = $('<h8>')
        .addClass('card-subtitle-size ')
        .append(size);
      var paragraph = $('<p>')
        .addClass('card-text-description')
        .append(description);
      var ahref = $('<a>')
        .attr('href', '#')
        .addClass('button-id');
    };
    dom();

    var newRow = $('<tr>').append(
      $('<td>').text(address),
      $('<td>').text(postalCode),
      $('<td>').text(price),
      $('<td>').text(numbBeds),
      $('<td>').text(numbBaths),
      $('<td>').text(description),
      $('<td>').text(type),
      $('<td>').text(utilities),
      $('<td>').text(size)
    );

    $('#employee-table > tbody').append(newRow);
  });*/
  database.ref().on('value', function(childSnapshot) {
    console.log('Value objects:', childSnapshot.val()); //todo : figure out why null

    var searchValue = '';
    var something = Object.keys(childSnapshot.val());

    console.log('checking:' + something);
    console.log(something.LIO1pioQC61bPTqRWAb);

    var rootRef = database.ref();
    var urlRef = rootRef.child('real-estate-app-9e4e6');
    urlRef.once('value', function(child) {
      childSnapshot.forEach(function(child) {
        console.log('child: ' + child.val().address);
        console.log('postals:' + child.val().postalcode);

        //console.log('child: ' + child.val());//give object object
        //console.log('rootref:' + child.val());

        //$('.card-title-address').append(child.val().address);
        //$('.card-subtitle-postalcode ').append(child.val().postalcode);
        //$('.card-subtitle-beds ').append(child.val().price);
        //$('.card-subtitle-baths ').append(child.val().numbBeds);
        //$('.card-subtitle-type ').append(child.val().numbBaths);
        //$('.card-subtitle-utilities ').append(child.val().description);
        //$('.card-subtitle-size ').append(child.val().type);
        //$('.card-text-description ').append(child.val().size);
        var dom = function() {
          var row = $('<div>').addClass('row');
          var colmd = $('<div>').addClass('col-md-6');
          var card = $('<div>')
            .addClass('card')
            .css('width', '18rem');
          var img = $('<img>')
            .addClass('card-img-top')
            .attr('src', 'images/pikachutest.png');
          var cardBody = $('<div>');
          var h1 = $('<h1>')
            .addClass('card-title address')
            .append(child.val().address);
          var h2 = $('<h7>')
            .addClass('card-subtitle postalcode')
            .append(child.val().postalcode);
          var h3 = $('<h2>')
            .addClass('card-subtitle mb-2 text-muted')
            .append(child.val().price);
          var h4 = $('<h3>')
            .addClass('card-subtitle beds')
            .append(child.val().beds + ' beds');
          var h5 = $('<h4>')
            .addClass('card-subtitle baths')
            .append(child.val().baths + ' baths');
          var h6 = $('<h6>')
            .addClass('card-subtitle type')
            .append(child.val().type);
          var h7 = $('<h7>')
            .addClass('card-subtitle utilities')
            .append(child.val().utilities);
          var h8 = $('<h8>')
            .addClass('card-subtitle size ')
            .append(child.val().size);
          var paragraph = $('<p>')
            .addClass('card-text-description')
            .append(child.val().description);
          var ahref = $('<a>')
            .attr('href', '#')
            .addClass('button-id');
          h1.appendTo(cardBody);
          h2.appendTo(cardBody);
          h3.appendTo(cardBody);
          h4.appendTo(cardBody);
          h5.appendTo(cardBody);
          h6.appendTo(cardBody);
          h7.appendTo(cardBody);
          h8.appendTo(cardBody);
          paragraph.appendTo(cardBody);
          ahref.appendTo(cardBody);
          img.appendTo(card);
          cardBody.appendTo(card);
          card.appendTo(colmd);
          colmd.appendTo(row);
          h1.appendTo(cardBody);
          h2.appendTo(cardBody);
          h3.appendTo(cardBody);
          h4.appendTo(cardBody);
          h5.appendTo(cardBody);
          h6.appendTo(cardBody);
          h7.appendTo(cardBody);
          h8.appendTo(cardBody);
          paragraph.appendTo(cardBody);
          ahref.appendTo(cardBody);
          img.appendTo(card);
          cardBody.appendTo(card);
          card.appendTo(colmd);
          colmd.appendTo(row);
          var container = $('.container');
          row.appendTo(container);
        };
        dom();

        //card-title address => .address
        //address

        $('.submit').on('click', function() {
          event.preventDefault();
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
            console.log(child.val());
            //get all results for search value matching to records
            //var parentkey = childSnapshot.ref.parent.getKey();
            //console.log(parentkey);

            var searchdom = function() {
              var row = $('<div>').addClass('row');
              var colmd = $('<div>').addClass('col-md-6');
              var card = $('<div>')
                .addClass('card')
                .css('width', '18rem');
              var img = $('<img>')
                .addClass('card-img-top')
                .attr('src', 'images/pikachutest.png');
              var cardBody = $('<div>');
              var h1 = $('<h1>')
                .addClass('card-title address')
                .text(child.val().address);
              var h2 = $('<h7>')
                .addClass('card-subtitle postalcode')
                .append(child.val().postalcode);
              var h3 = $('<h2>')
                .addClass('card-subtitle mb-2 text-muted ')
                .append(child.val().price);
              var h4 = $('<h3>')
                .addClass('card-subtitle beds ')
                .append(child.val().beds + ' beds');
              var h5 = $('<h4>')
                .addClass('card-subtitle baths')
                .append(child.val().baths + ' baths');
              var h6 = $('<h6>')
                .addClass('card-subtitle type')
                .append(child.val().type);
              var h7 = $('<h7>')
                .addClass('card-subtitle utilities')
                .append(child.val().utilities);
              var h8 = $('<h8>')
                .addClass('card-subtitle size ')
                .append(child.val().size);
              var paragraph = $('<p>')
                .addClass('card-text-description')
                .append(child.val().description);
              var ahref = $('<a>')
                .attr('href', '#')
                .addClass('button-id');
              h1.appendTo(cardBody);
              h2.appendTo(cardBody);
              h3.appendTo(cardBody);
              h4.appendTo(cardBody);
              h5.appendTo(cardBody);
              h6.appendTo(cardBody);
              h7.appendTo(cardBody);
              h8.appendTo(cardBody);
              paragraph.appendTo(cardBody);
              ahref.appendTo(cardBody);
              img.appendTo(card);
              cardBody.appendTo(card);
              card.appendTo(colmd);
              colmd.appendTo(row);
              var container = $('.container');
              row.appendTo(container);
            };
            searchdom();
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
  /* var userDataRef = database
    .ref()
    .child('real-estate-app-9e4e6')
    .orderByKey();
  userDataRef.once('value').then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var address = childSnapshot.val().address;
      var postalCode = childSnapshot.val().postalcode;
      var price = childSnapshot.val().price;
      var numbBeds = childSnapshot.val().beds;
      var numbBaths = childSnapshot.val().baths;
      var description = childSnapshot.val().description;
      var type = childSnapshot.val().type;
      var utilities = childSnapshot.val().utilities;
      var size = childSnapshot.val().size;

      var dom = function() {
        var row = $('<div>').addClass('row');
        var colmd = $('<div>').addClass('col-md-6');
        var card = $('<div>')
          .addClass('card')
          .css('width', '18rem');
        var img = $('<img>')
          .addClass('card-img-top')
          .attr('src', 'images/pikachutest.png');
        var cardBody = $('<div>');
        var h1 = $('<h1>')
          .addClass('card-title-address')
          .append(address);
        var h2 = $('<h7>')
          .addClass('card - subtitle - postalcode')
          .append(postalCode);
        var h3 = $('<h2>')
          .addClass('card-subtitle mb-2 text-muted ')
          .append(price);
        var h4 = $('<h3>')
          .addClass('card-subtitle-beds ')
          .append(numbBeds);
        var h5 = $('<h4>')
          .addClass('card-subtitle-baths')
          .append(numbBaths);
        var h6 = $('<h6>')
          .addClass('card-subtitle-type')
          .append(type);
        var h7 = $('<h7>')
          .addClass('card-subtitle-utilities')
          .append(utilities);
        var h8 = $('<h8>')
          .addClass('card-subtitle-size ')
          .append(size);
        var paragraph = $('<p>')
          .addClass('card-text-description')
          .append(description);
        var ahref = $('<a>')
          .attr('href', '#')
          .addClass('button-id');
        h1.appendTo(cardBody);
        h2.appendTo(cardBody);
        h3.appendTo(cardBody);
        h4.appendTo(cardBody);
        h5.appendTo(cardBody);
        h6.appendTo(cardBody);
        h7.appendTo(cardBody);
        h8.appendTo(cardBody);
        paragraph.appendTo(cardBody);
        ahref.appendTo(cardBody);
        img.appendTo(card);
        cardBody.appendTo(card);
        card.appendTo(colmd);
        colmd.appendTo(row);
      };
      dom();
    });
  });*/
  /////////////////////////////////////////////
  //end of document.ready function
});
