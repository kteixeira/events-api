const restful = require('node-restful');

const { mongoose } = restful;

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [15, 'Title is too short, enter at least 15 characters'],
    maxlength: [200, 'Title is too long, enter maximum of 200 characters'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  street: {
    type: String,
    required: [true, 'Street is required'],
    maxlength: [200, 'Street is too long, enter maximum of 21 characters'],
  },
  number: {
    type: Number,
    required: [true, 'Number is required'],
  },
  district: {
    type: String,
    required: [true, 'District is required'],
  },
  city: {
    type: String,
    required: [true, 'City is required'],
  },
  state: {
    type: String,
    require: [true, 'State is required'],
  },
  postcode: {
    type: Number,
    required: [true, 'Postcode is required'],
    min: [8, 'Postcode is too short, enter at least 8 characters'],
  },
  latitude: {
    type: Number,
    required: [true, 'Latitude is required'],
  },
  longitude: {
    type: Number,
    required: [true, 'Longitude is required'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = restful.model('events', EventSchema);
