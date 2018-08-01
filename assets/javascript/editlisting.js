$(document).ready(function() {
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

  $('#address').val(sessionStorage.getItem('address'));
  $('#baths').val(sessionStorage.getItem('baths'));
  $('#beds').val(sessionStorage.getItem('beds'));
  $('#description').val(sessionStorage.getItem('description'));
  $('#postalcode').val(sessionStorage.getItem('postalcode'));
  $('#price').val(sessionStorage.getItem('price'));
  $('#size').val(sessionStorage.getItem('size'));
  $('#type').val(sessionStorage.getItem('type'));
  $('#utilities').val(sessionStorage.getItem('utilities'));

  $('#submit').on('click', function(event) {
    // event.preventDefault();

    // $('#editform')
    //   .validator()
    //   .on('submit', function(e) {
    //     if (e.isDefaultPrevented()) {
    //       // handle the invalid form...
    //     } else {
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
    }

    var address = $('#address')
      .val()
      .trim();

    var postalcode = $('#postalcode')
      .val()
      .trim();

    var price = $('#price')
      .val()
      .trim();

    var beds = $('#beds')
      .val()
      .trim();

    var baths = $('#baths')
      .val()
      .trim();

    var description = $('#description')
      .val()
      .trim();

    var type = $('#type')
      .val()
      .trim();

    var utilities = $('#utilities')
      .val()
      .trim();

    var size = $('#size')
      .val()
      .trim();

    database
      .ref()
      .child(sessionStorage.getItem('data-key'))
      .set({
        address: address,
        postalcode: postalcode,
        price: price,
        beds: beds,
        baths: baths,
        description: description,
        type: type,
        utilities: utilities,
        size: size,
        name: name,
        email: email,
        uid: uid,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

    sessionStorage.setItem('address', address);
    sessionStorage.setItem('baths', baths);
    sessionStorage.setItem('beds', beds);
    sessionStorage.setItem('description', description);
    sessionStorage.setItem('postalcode', postalcode);
    sessionStorage.setItem('price', price);
    sessionStorage.setItem('size', size);
    sessionStorage.setItem('type', type);
    sessionStorage.setItem('utilities', utilities);
    sessionStorage.setItem('email', email);

    window.location.href = 'details.html';
    //   }
    // });
  });

  $('#cancel').on('click', function(event) {
    event.preventDefault();
    window.location.href = 'details.html';
  });
});
