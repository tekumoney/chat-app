
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyC2rgbaEaGhnOAqFuxVmpuz29qb1rf2S-4",
      authDomain: "kwitter-41a85.firebaseapp.com",
      databaseURL: "https://kwitter-41a85-default-rtdb.firebaseio.com",
      projectId: "kwitter-41a85",
      storageBucket: "kwitter-41a85.appspot.com",
      messagingSenderId: "358848417096",
      appId: "1:358848417096:web:1fbcd75be2968b87cd777d",
      measurementId: "G-JX2PKJZGCE"
    };
    
    
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
     
    function addroom()
    {
          room_name = doccument.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({

            purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
