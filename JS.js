class User{
    constructor(user_id, firstname, lastname, address, sport, username, password) {
        this.id = user_id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.sport = sport;
        this.username = [];
        this.password = [];
    }
}

class Address{
    constructor(street_id, streetname, streetnumber, zipCode, city, country){
        this.id = street_id;
        this.streetname = streetname;
        this.streetnumber = streetnumber;
        this.zipcode = zipCode;
        this.city = city;
        this.country = country;
    }
}

class Sport{
    constructor(sport1, sport2, sport3, sport1lvl, sport2lvl, sport3lvl){
        this.favsport = sport1;
        this.sport2 = sport2;
        this.sport3 = sport3;
        this.favsportlvl = sport1lvl;
        this.sport2lvl = sport2lvl;
        this.sport3lvl = sport3lvl;
    }
}

let julius = new User(1, "Julius", "Nielsson", new Address(1,
    "Opalvej", 12, 3060, "Espergærde", "Danmark"),
    new Sport("Fodbold", "Amerikansk fodbold", "Tennis", "Mellem", "Høj", "Lav"),
    );

let username = "testbruger";
let password = "testpassword";

julius.username.push(username);
julius.password.push(password);

console.log(julius)