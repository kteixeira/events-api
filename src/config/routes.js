const express = require('express');
const Event = require('../services/eventsService');

module.exports = (server) => {
  const api = express.Router();
  server.use('/api', api);

  Event.register(api, '/events');
};
