import { Router } from 'express';
import * as LoginController from '../controllers/Login.controller';
import passport from '../passport/passport';

const router = new Router();

router.route('/logout').get(function(req,res,next){
    console.log("tryna log out!")
    req.logout();
    res.redirect('/landing');
});

export default router;
