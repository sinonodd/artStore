const monk = require('monk');
const db = monk('localhost/taybi-app');

module.exports = db;
