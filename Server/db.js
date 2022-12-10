const admin = require("firebase-admin")
require('dotenv').config()
const firebase = require("firebase/app");
const {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    browserLocalPersistence, setPersistence
} = require("firebase/auth");

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
};
const app = firebase.initializeApp(firebaseConfig)
var auth = getAuth()

// const cred = require("./newproject.json")
// admin.initializeApp({
//     credential: admin.credential.cert(cred)
// })
//const auth = getAuth()
//const db = admin.firestore()
//const AdminAuth = admin.auth()

exports.addUser = async (username, password) => {
  //  await setPersistence(auth, browserLocalPersistence)
    await createUserWithEmailAndPassword(auth, username, password)
}
exports.signIn = (username, password) => {
    signInWithEmailAndPassword(auth, username, password)
}