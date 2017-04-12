import { Router } from 'express';
import * as LoginController from '../controllers/Login.controller';
import passport from '../passport/passport';

const router = new Router();

router.route('/login').post(function(req,res,next){
    passport.authenticate('local', function(err, user, info){
        if(user){
            req.login(user, function(err){
                if (err){console.log(err)};
            });
            res.json({validLogin: true});
        }
        else{
            res.json({validLogin: false});
        }
    })(req,res,next);
});

export default router;
