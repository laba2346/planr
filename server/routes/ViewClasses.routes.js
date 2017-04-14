import { Router } from 'express';
import * as ViewClassesController from '../controllers/ViewClasses.controller';

const router = new Router();

router.route('/viewClasses').post(ViewClassesController.createClass);

export default router;
