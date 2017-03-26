import { Router } from 'express';
import * as CreateAssignmentController from '../controllers/CreateAssignment.controller';

const router = new Router();

router.route('/createAssignment').post(CreateAssignmentController.createAssignment);

export default router;
