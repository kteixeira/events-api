const State = require('./state');

State.methods(['get', 'post', 'put', 'delete']);
State.updateOptions({ new: true, runValidators: true });

module.exports = State;
