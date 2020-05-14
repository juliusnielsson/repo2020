module.exports = (req, res) =>{
  req.session.destroy(() =>{ //Session bliver slettet, og derved bliver brugeren logget ud
    res.redirect('/')
  }) 
}