import { Router } from 'express';
import * as LoginController from '../controllers/Login.controller';
import passport from '../passport/passport';

const router = new Router();

router.route('/login').post(passport.authenticate('local'), LoginController.login);

export default router;
