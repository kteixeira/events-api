const Event = require('./events');

Event.methods(['get', 'post', 'put', 'delete']);
Event.updateOptions({ new: true, runValidators: true });

module.exports = Event;
