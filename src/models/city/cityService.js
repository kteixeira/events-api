const City = require('./city');

City.methods(['get', 'post', 'put', 'delete']);
City.updateOptions({ new: true, runValidators: true });

module.exports = City;
