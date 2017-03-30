// Import model
var models = require('../models');
import bcrypt from 'bcrypt';
import passport from 'passport';

//Not sure at all how to use the controller here
export function login(req, res){
    passport.authenticate('local')
}
