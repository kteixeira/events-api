const express = require('express');
const Event = require('../models/event/eventsService');

module.exports = (server) => {
  const api = express.Router();
  server.use('/api', api);

  Event.register(api, '/events');
};
