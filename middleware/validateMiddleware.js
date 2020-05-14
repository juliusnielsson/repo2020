module.exports = (req,res,next)=>{    
    if(req.files == null || req.body.name == null || req.body.level == null || req.body.typeOfSport == null || req.body.age == null){
        return res.redirect('/teams/new') // Dette middleware sikrer at der kun kan POSTes hold til databasen hvis felterne er udfyldt
    }    
    next()
}