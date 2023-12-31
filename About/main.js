// Some data from firebase

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAUANY_nXm_l511r5VrD-2vnyc5xKHHNbc",
    authDomain: "mathshrc-115c6.firebaseapp.com",
    databaseURL: "https://mathshrc-115c6.firebaseio.com",
    projectId: "mathshrc-115c6",
    storageBucket: "mathshrc-115c6.appspot.com",
    messagingSenderId: "806236132135",
    appId: "1:806236132135:web:ca2dbdff21a3d77a70cf02",
    measurementId: "G-68Q1YY5KJP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//Some link to be added in th main .html file


// Some coding which is left is  done here
// Reference messages collection
var messagesRef = firebase.database().ref('messages'); //.ref('messages') is for specific collections

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit',submitform);


// Submit form
function submitform(e){
    e.preventDefault();

    
    // Get values
    var name= getInputVal('name');
    //var name= getInputVal('name'); copy paste and set the values of the id and theh variables

    // Save Message
    saveMessage(name); // enter all the varibles in the bracket seperated by comma and space
 

    //Show Alert
    document.querySelector('.alert').getElementsByClassName.display = 'block';
    

    //Hide alert after 3 seconds


    setTimeout(function(){

        document.querySelector('.alert').getElementsByClassName.display = 'none';

    },3000);


    // Clearing all the data which is left out

    document.getElementById('contactform').reset();

}


// Function to get form values
function getInputVal(email){

    return document.getElementById(email).value;

     
}


// Save the message to firebase

function saveMessage(name){     // all the fields that are required to be saved should be enteered in the saveMessage() function as argument

    var newMessageref = messagesRef.push();
    newMessageref.set({

        name:name // enter all the enteies seperated by comma
    })



}