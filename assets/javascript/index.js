$(document).ready(function() {
  var imageno = 0;

  // Initialize Firebase
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

  function renderHTML(snapshot, imageno) {
    var obj = snapshot.val();

    var col = $("<div class='col-md-4 onelisting' id='" + snapshot.key + "'>");
    var card = $("<div class='card' style='width: 18rem;'>");

    var image = $(
      "<img class='card-img-top' src='assets/images/" +
        imageno +
        ".jpg' height='200' width='200' alt='Card image cap'>"
    );
    var cardBody = $("<div class='card-body'>");
    var cardTitle = $("<h5 class='card-title'>");
    cardTitle.text(obj.address + ', ' + obj.postalcode);
    var cardData = $("<p class='card-text'>");
    cardData.html(
      obj.price +
        '<br>' +
        obj.beds +
        " <i class='fas fa-bed'></i><span>   </span>" +
        obj.baths +
        " <i class='fas fa-bath'></i>"
    );
    var cardDetails = $("<a href='#' class='btn btn-primary details'>");
    cardDetails.text('Details');
    cardDetails.attr('data-key', snapshot.key);
    cardDetails.attr('image-no', imageno);

    cardBody.append(cardTitle);
    cardBody.append(cardData);
    cardBody.append(cardDetails);

    card.append(image);
    card.append(cardBody);

    col.append(card);

    $('.row').append(col);
  }

  database.ref().on(
    'child_added',
    function(snapshot) {
      imageno++;
      renderHTML(snapshot, imageno);
    },
    function(errorObject) {
      console.log('Error: ' + errorObject.code);
    }
  );

  database.ref().on(
    'child_removed',
    function(snapshot) {
      $('#' + snapshot.key).remove();
    },
    function(errorObject) {
      console.log('Error: ' + errorObject.code);
    }
  );

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      $('.loginlogout').text('Log Out');
      $('.loginlogout').attr('login-stat', 'logout');

      $('.createlisting').show();

      console.log(user);
    } else {
      // No user is signed in.
      $('.loginlogout').text('Log In');
      $('.loginlogout').attr('login-stat', 'login');

      $('.createlisting').hide();
    }
  });

  $(document.body).on('click', '.loginlogout', function() {
    var status = $('.loginlogout').attr('login-stat');

    if (status === 'login') {
      window.location.href = 'login.html';
    } else if (status === 'logout') {
      firebase
        .auth()
        .signOut()
        .then(
          function() {
            console.log('sign out successful!');
          },
          function(error) {
            console.log('sign out failed!');
          }
        );
    }
  });

  $('.createlisting').on('click', function() {
    window.location.href = 'addlisting.html';
  });

  $(document.body).on('click', '.details', function(event) {
    event.preventDefault();
    // alert($(this).attr('data-key'));

    var user = firebase.auth().currentUser;

    if (user != null) {
      sessionStorage.clear();

      database
        .ref()
        .child($(this).attr('data-key'))
        .once('value')
        .then(function(snapshot) {
          sessionStorage.setItem('address', snapshot.val().address);
          sessionStorage.setItem('baths', snapshot.val().baths);
          sessionStorage.setItem('beds', snapshot.val().beds);
          sessionStorage.setItem('description', snapshot.val().description);
          sessionStorage.setItem('postalcode', snapshot.val().postalcode);
          sessionStorage.setItem('price', snapshot.val().price);
          sessionStorage.setItem('size', snapshot.val().size);
          sessionStorage.setItem('type', snapshot.val().type);
          sessionStorage.setItem('utilities', snapshot.val().utilities);
          sessionStorage.setItem('email', snapshot.val().email);
        });

      sessionStorage.setItem('image-no', $(this).attr('image-no'));
      sessionStorage.setItem('data-key', $(this).attr('data-key'));
      sessionStorage.setItem('loginEmail', user.email);

      window.location.href = 'details.html';
    } else {
      $('#exampleModalCenter').modal('show');
    }
  });

  $('#detaillogin').on('click', function() {
    window.location.href = 'login.html';
  });
});
