
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  //import { getAnalytics } from "firebase/analytics";
  import {collection, doc, Firestore, getFirestore, setDoc, serverTimestamp} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
  



  const firebaseConfig = {
    apiKey: "AIzaSyBAtHPbFJJUWrAfxTR4SprjTQdZNsjUKlE",
    authDomain: "devansh-dhingra.firebaseapp.com",
    databaseURL: "https://devansh-dhingra-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "devansh-dhingra",
    storageBucket: "devansh-dhingra.appspot.com",
    messagingSenderId: "1092471857237",
    appId: "1:1092471857237:web:ded774c32eb496047eb4dc",
    measurementId: "G-4R8WRRR7X9"
  };



  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Get a reference to the form
  


  let addCustomer = document.getElementById('contact-form');
  addCustomer.addEventListener('submit',(e) => {
      e.preventDefault();
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value; 
      let phone = document.getElementById('phone').value;
      let message = document.getElementById('message').value;
      document.getElementById('name').value = "";
      document.getElementById('email').value = "";
      document.getElementById('phone').value = "";
      document.getElementById('message').value="";
      let docRef = doc( db , `customers/${name}` );
      try{
        setDoc(docRef,{
            name,
            email,
            phone,
            message,
            timestamp: serverTimestamp() 
        });
      }catch(error){
        console.log(error);
      }      
      
  })
 