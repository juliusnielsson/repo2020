const bcrypt = require('bcrypt')
const User = require('../models/User')

module.exports = (req, res) =>{
    const { username, password } = req.body; //Vi angiver hvilke fields vi vil anvende i req

    User.findOne({username:username}, (error,user) => { //Derefter finder vi ét username i databasen ud fra det username brugeren har skrevet
        if (user){
            bcrypt.compare(password, user.password,(error, same) =>{ //Passwordet i dokumentet og brugerens indtastede password bliver sammenlignet
                if(same){ //Hvis de er ens bliver session.userId defineret som userens objekt id
                    req.session.userId = user._id
                    res.redirect('/teamindex') //Brugeren bliver sendt til forsiden
                }
                else{
                    res.redirect('/auth/teamlogin') //Hvis passwordsene ikke passer bliver brugeren henvist tilbage til login siden
                }
            })
        }
        else{
            res.redirect('/auth/teamlogin') // -||-
        }
    })
}