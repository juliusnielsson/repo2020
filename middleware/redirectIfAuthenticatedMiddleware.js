module.exports = (req, res, next) =>{
    if(req.session.userId){
      return res.redirect('/') // Hvis brugeren er logget ind bliver der redirected til forsiden
    }
    next()
}