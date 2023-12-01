const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment/moment')

const feedSchema = new Schema ( {
    name :{
        type:String,
        required:true,
        maxLength:15
    },
    message :{
        type:String,
        required:true,
        maxLength:40
    },

    create_at:{
        type:Date,
        default:Date.now,
        get: function(createdAt){
             return moment(createdAt).format('MMMM Do YYYY, h:mm:ss a');
             }          
    }

}, {timestamps:true})

const Feed = mongoose.model('Feed', feedSchema)

module.exports ={
    Feed
}
