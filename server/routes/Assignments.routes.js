import { Router } from 'express';
import * as AssignmentsController from '../controllers/Assignments.controller';

const router = new Router();

router.route('/createAssignment').post(AssignmentsController.createAssignment);
router.route('/fetchAssignments').get(AssignmentsController.fetchAssignments);
router.route('/deleteAssignment').post(AssignmentsController.deleteAssignment);
router.route('/editAssignment').post(AssignmentsController.editAssignment);
export default router;
