const mongoose = require('mongoose');

const requestSchema = mongoose.Schema(
  {
    reqNumber: { type: Number, required: true },
    reqPhoto: Buffer,
    ofUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    ergency: { type: Number, min: 1, max: 10, default: 1 },
    status: { type: String, default: 'sent' },
    reqStreet: String,
    reStreetNum: Number,
    reqIsDone: { type: Boolean, default: false },
    reqDescription: { type: String, maxLength: 255 },
    reqTitle: String,
    inCharge: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Request', requestSchema);
