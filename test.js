const mongoose = require('mongoose')

const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true});

var id = "5e6272cbda6ab163446b87ae";

BlogPost.findByIdAndUpdate(id,{
    title:'Updated title'
}, (error,blogpost) =>{
    console.log(error,blogpost)
})