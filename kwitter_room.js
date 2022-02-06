const firebaseConfig = {
      apiKey: "AIzaSyDHzWY7mPd3RZVywBawbyyPYwvM6dUggKc",
      authDomain: "kwitter-web-app-626af.firebaseapp.com",
      databaseURL: "https://kwitter-web-app-626af-default-rtdb.firebaseio.com",
      projectId: "kwitter-web-app-626af",
      storageBucket: "kwitter-web-app-626af.appspot.com",
      messagingSenderId: "37632639096",
      appId: "1:37632639096:web:89b86d55dcd51956bb2d8d",
      measurementId: "G-HFCPP9LGVH"
    };
    
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
