const auth = require("../db")
//const firebase = require("firebase")
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth")



const RegisterUser = async (req, res) => {
    const auth = getAuth()
    const email = req.body.email
    const password = req.body.password

    createUserWithEmailAndPassword(auth, email, password).then((UserCredential) => {
        const user = UserCredential.user

        res.send("user Created", user)
    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            res.status(errorCode).json(errorMessage)
        });
}

module.exports = { RegisterUser }