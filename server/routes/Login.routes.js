import { Router } from 'express';
import * as LoginController from '../controllers/Login.controller';
import passport from 'passport';

const router = new Router();

router.route('/login').post(passport.authenticate('local'), function(req, res) {
  res.redirect('/')
  console.log("memes")
});

export default router;
