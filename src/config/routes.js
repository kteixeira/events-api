const express = require('express');
const Address = require('../models/address/addressService');
const City = require('../models/city/cityService');
const Event = require('../models/event/eventService');
const State = require('../models/state/stateService');

module.exports = (server) => {
  const api = express.Router();
  server.use('/api', api);

  Address.register(api, '/address');
  City.register(api, '/city');
  Event.register(api, '/event');
  State.register(api, '/state');
};
