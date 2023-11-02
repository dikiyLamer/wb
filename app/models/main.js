const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    port: dbConfig.port
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.card = require('./card.model.js')(sequelize, Sequelize);
db.size = require('./size.model.js')(sequelize, Sequelize);

db.card.hasMany(db.size);
db.size.belongsTo(db.card);

module.exports = db;
