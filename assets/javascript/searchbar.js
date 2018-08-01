$(document).ready(function() {
  // Initialize Firebase
  var firebase = require('./firebase.js');

  //var database = firebase.database();

  firebase.ref().on('value', function(childSnapshot) {
    console.log('Value objects:', childSnapshot.val()); //todo : figure out why null

    //var searchValue = '';
    //var something = Object.keys(childSnapshot.val());

    //console.log('checking:' + something);
    //console.log(something + LIO1pioQC61bPTqRWAb);

    var rootRef = firebase.ref();
    var urlRef = rootRef.child('real-estate-app-9e4e6');
    urlRef.once('value', function(child) {
      childSnapshot.forEach(function(child) {
        console.log('child: ' + child.val().address);
        console.log('postals:' + child.val().postalcode);

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
              //var img = $('<img>')
              //.addClass('card-img-top')
              //.attr('src', 'images/pikachutest.png');
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
              //img.appendTo(card);
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
}); //end of document .ready
