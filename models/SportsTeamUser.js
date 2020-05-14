const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SportsTeamUserSchema = new Schema({
    name: String,
    userid: [{ //userid fieldet er et tomt array
        type: mongoose.Schema.Types.ObjectId, // Må kun bestå af object id'er fra mongo
        ref: 'User' //refererer til User collection
    }],
    teamid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SportsTeam' //refererer til SPortsTeam collection
    }
})

const SportsTeamUser = mongoose.model('SportsTeamUser',SportsTeamUserSchema);
module.exports = SportsTeamUser

