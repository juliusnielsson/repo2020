const mongoose = require('mongoose')
const Schema = mongoose.Schema;
 
const SportsTeamSchema = new Schema({ //Vi definerer SportsTeam som et nyt schema / collection
  name: String,
  typeOfSport: String,
  age: String,
  level: String,
  userid: {
    type: mongoose.Schema.Types.ObjectId, //userid skal være af typen object id fra mongodb
    ref: 'User',  //Den refererer til User collection
    required: true
  },  
  datePosted:{ 
    type: Date,
    default: new Date() //datoen bliver det eksakte tidspunkt holdet er oprettet på
  },
  image: String
});

const SportsTeam = mongoose.model('SportsTeam',SportsTeamSchema);
module.exports = SportsTeam


