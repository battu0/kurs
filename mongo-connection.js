const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/kurs', 
    () => {
        console.log('connected to MongoDB')
    },
    err => {
        console.log(err)
    })