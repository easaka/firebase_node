const firebase = require("firebase")

const firebaseConfig = {
    apiKey: "AIzaSyAhvDWfT5O82EY99oiAIHiUrVkgv1K8DpY",
    authDomain: "nodecrud-2c251.firebaseapp.com",
    projectId: "nodecrud-2c251",
    storageBucket: "nodecrud-2c251.appspot.com",
    messagingSenderId: "886358760561",
    appId: "1:886358760561:web:0affad8a2437784d39cfd0"
  };
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const User = db.collection("Users")



