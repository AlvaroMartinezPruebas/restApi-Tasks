import {Router} from 'express';
import * as taskCtrl from '../controllers/task.controllers';

const router = Router();


router.get('/',taskCtrl.findAllTasks );
router.get("/termin",taskCtrl.findAllTasksTerminadas);
router.get('/:id',taskCtrl.findOneTask);

router.post("/", taskCtrl.createTask);
router.delete('/:id',taskCtrl.deleteTask);
router.put('/:id',taskCtrl.updateTask);

export default router;