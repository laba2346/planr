import { Router } from 'express';
import * as LoginController from '../controllers/Login.controller';

const router = new Router();

router.route('/login').post(LoginController.login);

export default router;
