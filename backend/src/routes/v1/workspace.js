
import express from 'express';

import { createWorkspaceController,  deleteWorkspaceController, getWorkspacesUserIsMemberOfController } from '../../controllers/workspaceController.js';
import { createWorkspaceSchema } from '../../validators/workspaceSchema.js';
import { validate } from '../../validators/zodValidator.js';
import { isAuthenticated } from './../../middleware/authMiddleware.js';

const router=express.Router();

router.post('/',isAuthenticated,validate(createWorkspaceSchema),createWorkspaceController);
router.get('/',isAuthenticated,getWorkspacesUserIsMemberOfController);

router.delete('/:workspaceId',isAuthenticated,deleteWorkspaceController)

export default router;