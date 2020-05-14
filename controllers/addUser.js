const mongoose = require('mongoose')
const SportsTeamUser = require('../models/SportsTeamUser')

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true, useFindAndModify: false});

module.exports = (req,res) =>{
    SportsTeamUser.findOne({teamid: req.body.teamid}, function (err, teamuser) { //Vi finder ét dokument ud fra et specificeret field i SportsTeamUser collection. Her requester vi efter et specifikt teamid, nemlig det brugeren har trykket på
        SportsTeamUser.findByIdAndUpdate(teamuser._id,{ //Derefter bruges metoden findByIdAndUpdate, der gør det muligt at opdatere et field i det dokument vi har specificeret
            $push: { userid: req.session.userId } //$push gør det muligt at skubbe values i arrays i dokumenter. I fieldet userid skubber vi id'et fra den bruger der anvender systemet gennem req.session.userId
        },null, (error, sportsteamuser) =>{
            console.log(error,sportsteamuser)
            res.redirect('/')
        })
    })
}
