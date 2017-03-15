'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/dbConfig.json');
var db        = {};

if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize(process.env.DATABASE_URL,config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

var assignments = require('./assignments.js');
var classes = require('./classes.js');
var users = require('./users.js');

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

sequelize.sync().then(function() {
  usersModel.create({
    username: 'aaron',
    email: 'clauset@colorado.edu',
    password:'flashy'
}, function(){
    console.log('added!');
});
})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
