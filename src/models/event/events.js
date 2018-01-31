const restful = require('node-restful');

const { mongoose } = restful;

const EventSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  street: { type: String },
  number: { type: Number },
  district: { type: String },
  city: { type: String },
  state: { type: String },
  postcode: { type: Number },
  latitude: { type: Number },
  longitude: { type: Number },
  date: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
});

module.exports = restful.model('events', EventSchema);
