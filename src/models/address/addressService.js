const Address = require('./address');

Address.methods(['get', 'post', 'put', 'delete']);
Address.updateOptions({ new: true, runValidators: true });

module.exports = Address;
