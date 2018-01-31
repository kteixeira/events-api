const restful = require('node-restful');

const { mongoose } = restful;

const ConversationsSchema = new mongoose.Schema({
  county_code: { type: Number },
  county: { type: String },
  state_id: { type: Number },
  created_at: { type: Date, default: Date.now },
});

module.exports = restful.model('Conversations', ConversationsSchema);
