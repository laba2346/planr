// Import model
import {sequelize, users } from '../models/index.js';
import bcrypt from 'bcryptjs';

export function newProfilePic(req, res){
  var profile_pic = req.body.profile_pic;
  console.log(profile_pic);
  var user_id = req.user.id;
  var values = {};
  if(profile_pic !== null){
      values.profile_pic = profile_pic;
  }

  sequelize.sync().then(function(){
      users.update(values, { where: { id: user_id } }).then(function(result){
          res.send(values);
      });
  });
}

/**
    This updates the database with new settings for the user in req.user().
    @param {Object} req This is the Express req object
    @param {Object} res This is the Express res object
*/
export function newSettings(req, res){

    var color = req.body.color;
    var user_id = req.user.id;
    var newUser = req.body.username;
    var newEmail = req.body.email;
    var newPassword = req.body.password1;
    var verifyPassword = req.body.password2;
    var hash = bcrypt.hashSync(newPassword, bcrypt.genSaltSync(8), null);
    var values = {};
    if(color !== ''){
        values.color = color;
    }
    if(newUser !== ''){
        values.username = newUser;
    }
    if(newEmail !== ''){
        values.email = newEmail;
    }
    if(newPassword !== '' && hash !== null){
        values.password = hash;
    }

    sequelize.sync().then(function(){
        users.update(values, { where: { id: user_id } }).then(function(result){
            if(result){
                res.json({success: true});
            }
        });
    });
}
