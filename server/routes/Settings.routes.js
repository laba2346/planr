import { Router } from 'express';
import * as SettingsController from '../controllers/Settings.controller';

const router = new Router();

router.route('/createSettings').post(SettingsController.newSettings);
router.route('/loadSettings').get(SettingsController.loadSettings);

export default router;
