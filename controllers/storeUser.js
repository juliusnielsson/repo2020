const User = require('../models/User.js')

module.exports = (req,res)=>{ 
    User.create(req.body, (error, user) => {    //User bliver kreeret i collection med brugerens input som body.
        if(error){                      
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message) //Hvis der kommer en error bliver flash error messages aktivireret
            req.flash('validationErrors',validationErrors) 
            req.flash('data',req.body)            
            return res.redirect('/auth/register')        
        }        
        res.redirect('/')        
      })               
}

//req.session.validationErrors = validationErrors