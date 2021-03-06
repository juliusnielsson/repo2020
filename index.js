const express = require('express')
//Vi importerer forskellige node_modules med const og require
const app = new express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload') 

//Vi henter controllers fra controller mappen for at kunne bruge dem senere
const newTeamController = require('./controllers/newTeam')
const homeController = require('./controllers/home')
const storeTeamController = require('./controllers/storeTeam')
const getTeamController = require('./controllers/getTeam')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const expressSession = require('express-session');
const logoutController = require('./controllers/logout')
const getUserController = require('./controllers/getUser')
const teamLoginController = require('./controllers/teamLogin')
const teamHomeController = require('./controllers/teamHome')
const loginTeamUserController = require('./controllers/loginTeamUser')
const addUserController = require('./controllers/addUser')

//Vi henter middleware fra middleware mappen for at kunne bruge dem senere
const validateMiddleware = require("./middleware/validateMiddleware");
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')
const redirectIfTeamAuthenticatedMiddleware = require('./middleware/redirectIfTeamAuthenticatedMiddleware')
const flash = require('connect-flash');

app.use(fileUpload()) 

//Vi opretter og connecter efterfølgende til vores egen database i localhost gennem mongoose
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

//Vi bruger app.use til at anvende forskellige node moduler til vores app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')

app.use(express.static('public'))

//Vi definerer hvilket tal localhost: skal være på
app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})

app.use('/teams/store',validateMiddleware)

app.use(expressSession({
    secret: 'bispens gips gebis'
})) 

global.loggedIn = null;

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId; 
    next()   
});

app.use(flash());

//Alle vores HTTP GET og POST, dog Express + MVC, så der bliver brugt app.get og app.post der henviser til en controller.
app.get('/teams/new',authMiddleware, newTeamController)
app.get('/',homeController)
app.get('/team/:id',getTeamController)
app.post('/teams/store', authMiddleware, storeTeamController)
app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)
app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController)
app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)
app.post('/users/login',redirectIfAuthenticatedMiddleware, loginUserController) 
app.get('/auth/logout', logoutController)
app.get('/user/profile', getUserController)
app.get('/auth/teamlogin',redirectIfTeamAuthenticatedMiddleware, teamLoginController)
app.get('/teamindex', teamHomeController)
app.post('/auth/teamlogin', redirectIfTeamAuthenticatedMiddleware, loginTeamUserController)
app.post('/teams/adduser', addUserController)
app.use((req, res) => res.render('notfound'));