'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var db        = {};

if (process.env.DATABASE_URL) {
    var config    = require(__dirname + '/../config/dbConfigProduction.json');
    var sequelize = new Sequelize(process.env.DATABASE_URL,config);
} else {
  var config    = require(__dirname + '/../config/dbConfig.json');
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

var assignments = require('./assignments.js');
var classes = require('./classes.js');
var users = require('./users.js');
var settings = require('./settings.js');

var classesModel = sequelize.define('classes', classes, {
    freezeTableName: true,
    timestamps: false
});

var assignmentsModel = sequelize.define('assignments', assignments, {
    freezeTableName: true,
    timestamps: false
});

var usersModel = sequelize.define('users', users, {
    freezeTableName: true,
    timestamps: false
});

var settingsModel = sequelize.define('settings', settings, {
    freezeTableName: true,
    timestamps: false
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = {
    sequelize: sequelize,
    users: usersModel,
    assignments: assignmentsModel,
    classesModel: classesModel, //should this be classes?
    settings: settingsModel,
};
