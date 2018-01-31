const restful = require('node-restful');

const { mongoose } = restful;

const ConversationsSchema = new mongoose.Schema({
  state_code: { type: Number },
  state: { type: String },
  created_at: { type: Date, default: Date.now },
});

module.exports = restful.model('Conversations', ConversationsSchema);
