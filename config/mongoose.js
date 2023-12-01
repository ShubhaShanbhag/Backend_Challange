const mongoose = require('mongoose');
const db = 'mongodb+srv://shubhashanbhag32:shubhashanbhag32@cluster0.suxpr26.mongodb.net/'
mongoose.connect(db)
.then( res => console.log ("connected to db"))
.catch(err => console.log(err))