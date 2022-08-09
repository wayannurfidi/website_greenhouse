const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    MAC: {
        type: String
    },
    ADC: {
        type: String  
    },
    level: {
        type: Number,
        //level 1 admin
        // level 2 user
        default: 2
    }
})

module.exports = mongoose.model('sensork4', UserSchema)