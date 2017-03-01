import { Router } from 'express';
import * as SignUpController from '../controllers/SignUp.controller';

const router = new Router();

router.route('/signUp').post(SignUpController.newUser);

export default router;
