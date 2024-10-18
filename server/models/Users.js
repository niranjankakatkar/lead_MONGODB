const mongoose= require('mongoose');

const Schema =mongoose.Schema;
const Postusers = new Schema({
    id:{
        type: Intl,
        required: true
    },
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }
})

module.exports=mongoose.model('Users',Postusers);