import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  source: {
    type: String,
    enum: ['Website', 'Facebook', 'Twitter', 'Google', 'Offline'],
    required: true
  },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Interested', 'Not Interested', 'Converted'],
    default: 'New'
  },
  notes: String,
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  carInterest: String,
  budget: Number,
  lastContactDate: Date,
  nextFollowUp: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Lead', leadSchema);