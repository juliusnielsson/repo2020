const User = require('../models/User.js')
const SportsTeamUser = require('../models/SportsTeamUser')

module.exports = async (req,res)=>{
    const user = await User.findById(req.session.userId); //Vi finder brugeren gennem req.session.userId
    const sportsteamuser = await SportsTeamUser.find({ //Vi finder et specifikt dokument i SPortsTeamUser hvor det skal gælde at userid fieldet består af userId fra sessionen.
        userid: req.session.userId
    })
    console.log(user)
    res.render('profile',{ //Begge requests bliver efterfølgende renderet på 'profile' siden
        user,sportsteamuser
    });
}