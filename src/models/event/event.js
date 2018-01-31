const restful = require('node-restful');

const { mongoose } = restful;

const ConversationsSchema = new mongoose.Schema({
  user_id: { type: Number },
  address_id: { type: Number },
  title: { type: String },
  description: { type: String },
  Date: { type: Date, default: Date.now },
  created_at: { type: Date, default: Date.now },
});

module.exports = restful.model('Conversations', ConversationsSchema);
