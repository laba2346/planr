import { Router } from 'express';
import * as ViewClassesController from '../controllers/ViewClasses.controller';

const router = new Router();

router.route('/createClass').post(ViewClassesController.createClass);
router.route('/fetchClasses').get(ViewClassesController.fetchClasses)

export default router;
