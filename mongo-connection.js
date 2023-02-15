const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/coursegrp', 
    () => {
        console.log('connected to MongoDB')
    },
    err => {
        console.log(err)
    })