module.exports = (req, res) =>{ //Brugerens indtastede brugernavn og password bliver defineret
    var username = "" 
    var password = ""
    const data = req.flash('data')[0];   //Flash bliver anvendt for at bruge validation error beskeder

    if(typeof data != "undefined"){        
        username = data.username
        password = data.password
    }
     
    res.render('register',{        
        errors: req.flash('validationErrors'),
        username: username,
        password: password
    })
}