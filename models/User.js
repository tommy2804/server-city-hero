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
        unique: true,
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
        required: true,
      },
      gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true,
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
      myRequests: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Request',
          default: {},
        },
      ],
    },
    { timeStamp: true }
  )
);

export default User;
