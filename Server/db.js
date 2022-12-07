const admin = require("firebase-admin")

const firebase = require("firebase/app");
const {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} = require("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyCOK4Sq_OLq1DOaZg9KYjv_mWHf0nlFCc0",
    authDomain: "newproject-380b9.firebaseapp.com",
    projectId: "newproject-380b9",
    storageBucket: "newproject-380b9.appspot.com",
    messagingSenderId: "473550635423",
    appId: "1:473550635423:web:3c4270cac3cb630427fdaa"
};
firebase.initializeApp(firebaseConfig)
var auth = getAuth()

// const cred = require("./newproject.json")
// admin.initializeApp({
//     credential: admin.credential.cert(cred)
// })
//const auth = getAuth()
//const db = admin.firestore()
//const AdminAuth = admin.auth()

exports.addUser = (username, password) => {
    createUserWithEmailAndPassword(auth, username, password)
}
exports.signIn = (username, password) => {
    signInWithEmailAndPassword(auth, username, password)
}