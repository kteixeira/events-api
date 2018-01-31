const Event = require('./event');

Event.methods(['get', 'post', 'put', 'delete']);
Event.updateOptions({ new: true, runValidators: true });

module.exports = Event;
