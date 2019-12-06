const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize,Sequelize);
db.Qna = require('./qna')(sequelize,Sequelize);
db.Introduce = require('./introduce')(sequelize, Sequelize);
db.Homeimg = require('./homeimg')(sequelize,Sequelize);
db.Logoimg = require('./logoimg')(sequelize,Sequelize);
db.Hyon = require('./hyonzi')(sequelize,Sequelize);
db.Image = require('./hyonziimg')(sequelize,Sequelize);

module.exports = db;

