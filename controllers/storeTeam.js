const SportsTeam = require('../models/SportsTeam.js')
const SportsTeamUser = require('../models/SportsTeamUser')
const path = require('path')

module.exports = (req,res)=> {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '..', 'public/img', image.name), async (error) => { //Billede filen bliver konfigureret
        await SportsTeam.create({
            ...req.body, //Holdet bliver lavet med brugerens indtastede oplysninger
            image: '/img/' + image.name,
            userid: req.session.userId //klubbrugerens id bliver sat på userid fieldet
        }, (error, sportsteam) => { //Efter holdet er oprettet bliver holdet defineret så det kan bruges i de resterende argumenter
            SportsTeamUser.create({
                teamid: sportsteam._id, userid: [], name: sportsteam.name //Her bliver der oprettet et dokument i SportsTeamUser med sportsteamets id fra før i fieldet teamid. Desuden bliver fieldet userid oprettet som array. Til sidst vil fieldet name bestå af holdet fra førs navn
            })
            res.redirect('/teamindex')
        })
    })
}