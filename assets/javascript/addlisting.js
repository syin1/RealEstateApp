$(document).ready(function() {
  // Initialize Firebase
  var firebase = require('./firebase.js');

  $('#submit').on('click', function(event) {
    // event.preventDefault(); // this step is necessary to trigger the default validation

    // $('#addlistingform')
    //   .validator()
    //   .on('submit', function(e) {
    //     if (e.isDefaultPrevented()) {
    //       // handle the invalid form...
    //       console.log(e.isDefaultPrevented());
    //       console.log(e);
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

    firebase.ref().push({
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
      dateAdded: firebase.firebase.ServerValue.TIMESTAMP
    });

    window.location.href = 'index.html';
    //   }
    // });
  });

  $('#cancel').on('click', function(event) {
    event.preventDefault();
    window.location.href = 'index.html';
  });
});
