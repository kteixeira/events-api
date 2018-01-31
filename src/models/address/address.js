const restful = require('node-restful');

const { mongoose } = restful;

const ConversationsSchema = new mongoose.Schema({
  street: { type: String },
  number: { type: String },
  district: { type: String },
  city_id: { type: Number },
  postcode: { type: Number },
  latitude: { type: Number },
  longitude: { type: Number },
  created_at: { type: Date, default: Date.now },
});

module.exports = restful.model('Conversations', ConversationsSchema);
