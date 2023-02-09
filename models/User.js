import mongoose from 'mongoose';

const User = new mongoose.model(
  'User',
  new mongoose.Schema(
    {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        enum: ['male', 'female', 'other'],
      },
      role: {
        type: String,
        enum: ['citizen', 'inspector', 'municipality'],
        default: 'municipality', // until the native
      },
      location: {
        type: {},
        default: {},
      },
      isInvolved: {
        type: Boolean,
        default: false,
      },
      myRequests: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Request',
      },
    },
    { timeStamp: true }
  )
);

export default User;
