
const mongoose = require('mongoose')

const User = new mongoose.model('User', new mongoose.Schema({
    firstName:{
        type: String,
        required : true,
    },
    lastName:{
        type: String,
        required : true,
    },
    email:{
        type: String,
        required : true,
    },
    password:{
        type: String,
        required : true,
    },
    phoneNumber:{
        type: String,
        required : true,
    },
    city:{
        type: String,
        required : true,
    },
    gender:{
        type:String,
        enum: ['male','female','other'],
        required : true,
    },
    role:{
        type:String,
        enum: ['citizen','inspector','municipality'],
        required : true,
    },
    location:{
        type: [],
    },
    isInvolved:{
        type: Boolean,
        default:false,
    },
    myRequests:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Request',
    }],
},
{timeStamp:true},
)) ;


exports.User= User;


 



