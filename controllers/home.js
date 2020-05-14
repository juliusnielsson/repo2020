const SportsTeam = require('../models/SportsTeam.js')

module.exports = async (req, res) =>{
    const sportsteams = await SportsTeam.find({}).populate('userid'); //alle dokumenter i SporsTeam collection bliver fundet

    console.log(req.session)       
    res.render('index',{ //Derefter bliver alle dokumenterne renderet på 'index' siden
        sportsteams
    });
}