import { Router } from 'express';
import * as AssignmentsController from '../controllers/Assignments.controller';

const router = new Router();

router.route('/createAssignment').post(AssignmentsController.createAssignment);
router.route('/fetchAssignments').get(AssignmentsController.fetchAssignments);



export default router;
