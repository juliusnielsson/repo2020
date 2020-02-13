//Vi definerer Sportsgren som en array der indeholder flere arrays (sportsgrene) der så indeholder forskellige hold
let Sportsgren  = [
    {
        fodbold: ["HIK fodbold","Islev fodbold","Jægersborg fodbold"]
    },
    {
        handbold: ["Lyngby håndbold", "Frederiksberg håndbold"]
    },
    {
        badminton: ["Hillerød badminton klub", "Køge badminton", "Rødovre badminton"]
    },
    {
        svomning: ["Frederiksberg svømning", "Brøndby svømmeklub"]
    },
    {
        fagtning: ["Gentofte fægteklub", "Farum fagtning"]
    },
    {
        basketball: ["SISU basketball", "Østerbro basketball"]
    },
    {
        esport: ["E-sport København"]
    },
    {
        volleyball: ["Amager volleyball"]
    },
    {
        atletik: ["Sparta atletik"]
    },
];

//Dette stykke kode gør at det den sportsgren brugeren skriver alerter de hold der er inde i arrayen der passer til
function submitSport() {
    //variablen userSearch bliver linket til id'et user_search
    let userSearch = document.getElementById("user_search");

    /* Hvis brugeren skriver "fodbold" i søgefeltet vil arrayen "fodbolf" blive hentet fra arrayen "Sportsgren" og alerte
    * indholdet samt noget tekst. At vi bruger "toLowerCase" gør at inputtet bliver lavet til små bogstaver inden det
    * bliver sammenlignet med "fodbold" sådan at den også alerter hvis der fx er stort forbogstav.  */
    if (userSearch.value.toLowerCase() == "fodbold") {
        alert("Disse klubber tilbyder fodbold:" +
            "\n" + Sportsgren[0]["fodbold"][0] + "," + " " + Sportsgren[0]["fodbold"][1] + "," + " " + Sportsgren[0]["fodbold"][2])
    }
    if (userSearch.value.toLowerCase() == "håndbold") {
        alert("Disse klubber tilbyder håndbold:" +
            "\n" + Sportsgren[1]["handbold"][0] + "," + " " + Sportsgren[1]["handbold"][1])
    }
    if (userSearch.value.toLowerCase() == "badminton") {
        alert("Disse klubber tilbyder badminton:" +
            "\n" + Sportsgren[2]["badminton"][0] + "," + " " + Sportsgren[2]["badminton"][1] + "," + " " + Sportsgren[2]["badminton"][2])
    }
    if (userSearch.value.toLowerCase() == "svømning") {
        alert("Disse klubber tilbyder svømning:" +
            "\n" + Sportsgren[3]["svomning"][0] + "," + " " + Sportsgren[3]["svomning"][1])
    }
    if (userSearch.value.toLowerCase() == "fægtning") {
        alert("Disse klubber tilbyder fægtning:" +
            "\n" + Sportsgren[4]["fagtning"][0] + "," + " " + Sportsgren[4]["fagtning"][1])
    }
    if (userSearch.value.toLowerCase() == "basketball") {
        alert("Disse klubber tilbyder basketball:" +
            "\n" + Sportsgren[5]["basketball"][0] + "," + " " + Sportsgren[5]["basketball"][1])
    }
    if (userSearch.value.toLowerCase() == "esport") {
        alert("Denne klub tilbyder esport:" +
            "\n" + Sportsgren[6]["esport"][0])
    }
    if (userSearch.value.toLowerCase() == "volleyball") {
        alert("Denne klub tilbyder volleyball:" +
            "\n" + Sportsgren[7]["volleyball"][0])
    }
    if (userSearch.value.toLowerCase() == "atletik") {
        alert("Denne klub tilbyder atletik:" +
            "\n" + Sportsgren[8]["atletik"][0])
    }
}

/* Dette kode bekræfter at de to passwords er ens. Hvis ikke, vil en alarm pege på password boksen og fortælle at de
ikke stemmer overens, hvis de stemmer, vil koden i stedte gå med 'else' og putte det indtastede brugernavn og password
i localstorage.*/


let users = [];
// fx {id:1592304983049, navn: 'Kristian', køn: han, alder: 23, mail: hej@gmail.com}
const addUser = (ev)=> {
    ev.preventDefault();  //Bruges til at stoppe formen fra at submitte, så vi ikke mister dataen
    var registerName = document.getElementById('register_name');
    var registerPassword = document.getElementById('register_password');
    var confirmPassword = document.getElementById("confirm_password");
    if (registerPassword.value != confirmPassword.value) {
        alert("Passwords matcher ikke!");
    } else {
        localStorage.setItem('register_name', registerName.value);
        localStorage.setItem('register_password', registerPassword.value);

        let user = {
            user_id: Date.now(),
            username: document.getElementById('register_name'),
            password: document.getElementById('register_password'),
            navn: document.getElementById('real_name').value,
            køn: document.getElementById('gender').value,
            alder: document.getElementById('age').value,
            mail: document.getElementById('mail').value
        }
        users.push(user);
        document.forms[0].reset(); // sletter formen
        //Gemmer det i localStorage
        localStorage.setItem('Users', JSON.stringify(users));
        window.location = ("index.html")
    }
}
//Gør at knappen kun virker når hele HTML siden er loadet
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addUser);
});

// Denne funktion tjekker om det indtastede brugernavn og password stemmer overens med det der ligger i local storage.
function login() {

    // Henter brugernavnet og passwordet fra local storage
    var storedName = localStorage.getItem('register_name');
    var storedPassword = localStorage.getItem('register_password');

    // Definerer det indtastede brugernavn og password fra login boksene
    var userName = document.getElementById('user_name');
    var userPassword = document.getElementById('user_password');

    // Tjekker om det indtastede brugernavn og password fra login boksene stemmer overens med dem fra local storage
    if(userName.value == storedName && userPassword.value == storedPassword) {
        window.location = ("forsiden.html")
    }else {
        alert('Forkert brugernavn eller password');
    }
}

//Dette kode validerer det indtastede information fra brugeren
function validateInformation() {

    //Vi Sætter JS variable, til de værdier der er indtastet i HTML formen
    var registrationName = document.getElementById('registration_name').value;
    var birthYear = document.getElementById('birth_year').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment_box').value;
    var trainingDay = document.getElementById('training_day').value;
    var trainingMonth = document.getElementById('training_month').value;
    var trainingTime = document.getElementById('training_time').value;

    // vi tilføjer brugerens valgte trænings dato ved at gøre dagen måneden og tidspunktet til én JS variabel
    var trainingDate = (trainingDay + "." + " " + trainingMonth + " " + "kl." + " " + trainingTime)

    //Vi specificerer variablen form_valid som true fra starten af
    var form_valid = true;

    // Radio buttons er et array, hvor man kun kan vælge én mulighed så vi skal loope igennem for at tjekke om en radio button er checked
    var difficultyButtons = document.getElementsByClassName('difficulty');
    var len = difficultyButtons.length;
    var difficulty = "";

    // vi laver et loop og ser efter om niveau button er checked med ".checked" keywordet
    // Hvis den er checked, så finder den value i den radio button
    var i = 0;

    var validDifficulty = false;
    for (i=0; i<len; i++) {
        if (difficultyButtons[i].checked) {
            difficulty = difficultyButtons[i].value;

            // vi tilføjer at variablen validRadio bliver sand, hvis en niveau knap er checked.
            validDifficulty = true;

        }
    }

    //Her specificerer vi hvad der skal ske i tilfældet af at en af radio knapperne ikke er blevet checked
    if(validDifficulty==false) {
        document.getElementById("validationTextRadio").innerHTML = "Du SKAL vælge en sværhedsgrad <br/>";
        form_valid = false;
    } else {
        /* Vi specificerer med en else statement'et, at hvis validRadio variablen indeholder booleanen true,
         så skal der ses bort fra <p> tag'et med id'et validationTextRadio */
        document.getElementById("validationTextRadio").innerHTML = null;
    }

    //Vi validerer usernamet

    if(registrationName==null || registrationName == "") {
        // Tilføjer en besked
        document.getElementById("validationTextName").innerHTML = "Du SKAL udfylde dit navn <br/>"

        // sætter formen til false
        form_valid = false;
    } else {
        // Det samme som med radio knapperne
        document.getElementById("validationTextName").innerHTML = null;
    }

    //Vi validerer telefonnummeret
    if (isNaN(phone)) {

        document.getElementById("validationTextPhonenumber").innerHTML = "Dit telefonnummer må KUN være tal <br/>";
        form_valid = false;
    } else if (phone== "") {
        document.getElementById("validationTextPhonenumber").innerHTML = "Du SKAL skrive et telefonnummer"
    } else {
        document.getElementById("validationTextPhonenumber").innerHTML = null;
    }


    //Vi validerer E-mail
    // vi undnytter her .indexOf() og .lastIndexOf()-metoderne på vores email variabel

    var atPos = email.indexOf("@");
    var dotPos = email.lastIndexOf(".");

    if(atPos < 1 || dotPos> email.length-2 || dotPos<atPos) {
        document.getElementById("validationTextEmail").innerHTML = "Du SKAL skrive en gyldig email<br/>";
        form_valid = false;

    } else {
        document.getElementById("validationTextEmail").innerHTML = null;
    }

    //Hvis alle variablerne er sande, kommer der en alert med det indtastede
    if(form_valid) {
        alert("Hi " + registrationName
            + "\nSværhedsgrad: " + difficulty
            + "\nÅrgang: " + birthYear
            + "\nTelefon: " + phone
            + "\nEmail: " + email
            + "\nDin kommentar: " + comment
            + "\nDato for træning: " + trainingDate);

// Hvis form_valid = false, så skal dette retuneres
    } else {
        return false;
    }
    // vi retunerer form_valid tilbage om den er sand eller falsk.
    return (form_valid);
}
