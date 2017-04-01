import { Router } from 'express';
import * as SettingsController from '../controllers/Settings.controller';

const router = new Router();

router.route('/settings').post(SettingsController.newSettings);

export default router;
