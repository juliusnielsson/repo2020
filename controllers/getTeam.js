const SportsTeam = require('../models/SportsTeam.js')

module.exports = async (req,res)=>{        
    const sportsteam = await SportsTeam.findById(req.params.id).populate('userid'); //Vi finder et specifikt hold gennem findById
    console.log(sportsteam)
    res.render('team',{ //herefter bruger vi render til at putte dataen på siden 'team'
        sportsteam
    });    
}


