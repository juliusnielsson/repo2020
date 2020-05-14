const User = require('../models/User')

module.exports = (req, res, next) => {    
    User.findById(req.session.userId, (error, user ) =>{
      if(error || !user ) 
        return res.redirect('/') //Hvis der opstår en error eller brugeren ikke findes i session bliver der redirected til index
      
      next() //med next() aktiveres den næste controller
    })
}