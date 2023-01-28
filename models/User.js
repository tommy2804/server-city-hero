import mongoose from 'mongoose';

const User = new mongoose.model(
  'User',
  new mongoose.Schema(
    {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required : true,
    },
    gender:{
        type: ['male','female','other'],
        required : true,
    },
    role:{
        type: ['citizen','inspector','municipality'],
        required : true,
    },
    location:{
        type: [],
      },
      isInvolved: {
        type: Boolean,
        required : true,
    },
    myRequests:{
        type: [mongoose.Schema.Types.ObjectId],
        ref:'Request',
    },
},
{timeStamp:true},
)) ;


exports.User= User;


 



