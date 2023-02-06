import mongoose from 'mongoose';

const requestSchema = mongoose.Schema(
  {
    reqNumber: { type: Number, required: true },
    reqPhoto: {type:String,default:null},
    ofUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    urgency: { type: Number, min: 1, max: 10, default: 1 },
    status: {
      type: String,
      enum: [
        'Sent to the municipality',
        'Sent to the inspector',
        'Hendeled by the inspector and returned to Municipality',
      ],
    },
    reqStreet: String,
    reStreetNum: Number,
    location: { type: {} },
    reqIsDone: { type: Boolean, default: false },
    reqDescription: { type: String, maxLength: 255 },
    reqTitle: String,
    inCharge: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    inspectorComment: String,
  },
  { timestamps: true }
);

const Request = mongoose.model('Request', requestSchema);
export default Request;
