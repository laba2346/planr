import { Router } from 'express';
import * as SettingsController from '../controllers/Settings.controller';

const router = new Router();

router.route('/updateSettings').post(SettingsController.newSettings);
router.route('/updateProfilePic').post(SettingsController.newProfilePic);
router.route('/loadSettings').get(SettingsController.loadSettings);

export default router;
