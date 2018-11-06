firebase.initializeApp({
  apiKey: 'AIzaSyBAlTZ65qlePTy65ELF_Mc5KmICLGcnub0',
  authDomain: 'usuario1-d3be9.firebaseapp.com',
  projectId: 'usuario1-d3be9'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});





