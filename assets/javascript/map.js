//FIREBASE INIT START
var config = {
  apiKey: 'AIzaSyBxZrsKG_py7bXZATlHpYoxe8-G9dFmneE',
  authDomain: 'test-3c5cc.firebaseapp.com',
  databaseURL: 'https://test-3c5cc.firebaseio.com',
  projectId: 'test-3c5cc',
  storageBucket: 'test-3c5cc.appspot.com',
  messagingSenderId: '903703720217'
};
// var config = {
//   apiKey: 'AIzaSyDYI4Fjm_RWQadwHH7KdTJGSErId9aUJKY',
//   authDomain: 'real-estate-app-9e4e6.firebaseapp.com',
//   databaseURL: 'https://real-estate-app-9e4e6.firebaseio.com',
//   projectId: 'real-estate-app-9e4e6',
//   storageBucket: 'real-estate-app-9e4e6.appspot.com',
//   messagingSenderId: '1087918608727'
// };
firebase.initializeApp(config);
var databaseRef = firebase.database().ref();
var i = 0;
var locFull = [];
//FIREBASE INIT END
//

//FIREBASE CALL START
databaseRef.on('value', function(snapshot) {
  console.log('Got into firebase');
  snapshot.forEach(function(childSnapshot) {
    console.log('Got into childSnapshot');
    console.log(childSnapshot.val());
    //Get address, for each property
    var address = childSnapshot.val().Address;
    console.log('Address = ' + address);
    //Push addresses into array locFull[] to be stored for later
    locFull.push(address);
    i++;
    console.log('Array locFull at ' + i + ' is = ' + locFull[i]);
  });
  console.log(locFull);
  getMap();
});
//FIREBASE CALL END
//

//MAP INIT START
var locTest = '301 Front St W, Toronto, ON, CA';
//Can't use address as a string for MapBox, need lat and long
var locConvertLat = [];
var locConvertLong = [];
var locConvertLongFake = -79.6393472; //Dummy var
var locConvertLatFake = 43.5593216; //Dummy var
//myMap var for creating map
var myMap;
//Token is for accessing MapBox
var token =
  'pk.eyJ1IjoidmlzaG51c3dhbWluYXRoYW4iLCJhIjoiY2prYWQ1a3h1MzViOTNxbWxwMHB4bWhudCJ9.Uqbta8e3Qg75vzNCxtOXHQ';
//Marker is for the points on the map
var marker;
//For using geocode
var geocoder = new google.maps.Geocoder();

function getMap() {
  console.log('getMap started');
  for (var j = 0; j < locFull.length; j++) {
    console.log('Got into geocode for loop');

    geocoder.geocode({ address: locFull[j] }, function(response, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        // Log all results
        console.log(response);
        //Log lattitude and longitude
        console.log(
          response[0].geometry.location.lat() +
            ' ' +
            response[0].geometry.location.lng()
        );
        //Store coordinates
        locConvertLat[j] = response[0].geometry.location.lat();
        locConvertLong[j] = response[0].geometry.location.lng();
        console.log(
          'loc coordinates= ' + locConvertLat[j] + ' ' + locConvertLong[j]
        );
        marker = new L.marker([locConvertLat[j], locConvertLong[j]]).addTo(
          myMap
        );
        console.log('created marker ' + j);
        console.log(response[0].formatted_address);

        marker.bindPopup(response[0].formatted_address);
      } else {
        console.log('Error: ' + status);
      }
    });
  }
}
function createMyMap(locConvertLat, locConvertLong) {
  myMap = L.map('mapid').setView([locConvertLat, locConvertLong], 11);
}
function createMap() {
  L.tileLayer(
    'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' +
      token,
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,' +
        ' Imagery © < a href = "https://www.mapbox.com/" > Mapbox</a > ',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'your.mapbox.access.token'
    }
  ).addTo(myMap);
}
//MAP INIT END
//

//MAP CALL START
createMyMap(locConvertLatFake, locConvertLongFake);
createMap();
//MAP CALL END
//
