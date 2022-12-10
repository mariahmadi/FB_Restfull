const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")
const csrf = require("csurf")
const cookieparser = require("cookie-parser")
const app = express()

const { addUser, signIn } = require("./db")

dotenv.config()



app.use(cors({ origin: 'http://localhost:5000', credentials: true }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const router = require("./Route/router")

app.use("/public", express.static(path.join(__dirname, "public")))
app.use(express.Router())
app.use("/api", router.router)
//app.use(cookieparser())
//const csrfMiddelware = csrf({ cookie: true })
//app.use(csrfMiddelware)
app.engine('html', require('ejs').renderFile)
app.set('views', path.join(__dirname, 'views'))
// app.all("*", csrfMiddelware, (req, res, next) => {
//     res.cookie({ 'XSRF-TOKEN': req.csrfToken() })
//     next()
// })
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:5000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Credentials", true);
//     next();
// });

app.get("/register", (req, res) => {

    res.render('register.html')
})
app.get("/login", (req, res) => {

    res.render('login.html')
})
app.post("/register", (req, res) => {

    console.log(req.body)
    //res.redirect("/users")
})

app.post("/users", async (req, res) => {

    try {
        // const auth = getAuth()
        //   console.log(AdminAuth)
        const username = req.body.username
        const password = req.body.password
        // const cred = req.body.cred

        const user = addUser(username, password)
        res.status(201).json(user);
    } catch (err) {
        res.status(401).json({ error: err.message });
        //   console.log(username)

        // const credential = await createUserWithEmailAndPassword(auth, username, password)
        // const credential = await auth.createUserWithEmailAndPassword(username, password)

        // const token = await AdminAuth.createCustomToken(
        //     credential.user.uid
        // )
        // await db.collection("userAuth").doc(`users/${credential.user.uid}`).set({ username: username, password: password })
        // window.location.assign("/Login.html")
        // res.redirect("/login")


    }

})

//app.use((req, res, next) => {
//  var user = firebase.auth().currentUser;
//res.locals.currentUser = user;
//  next();
//})
app.listen(process.env.PORT, () => {
    console.log("Server Is Running")
})
