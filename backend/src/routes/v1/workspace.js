
import express from 'express';

import { addChannelToWorkspaceController, addMemberToWorkspaceController, createWorkspaceController, deleteWorkspaceController, getWorkspaceByJoinCodeController, getWorkspaceController, getWorkspacesUserIsMemberOfController, updateWorksapceController } from '../../controllers/workspaceController.js';
import { addChannelToWorkspaceSchema, addMemberToWorkspaceSchema, createWorkspaceSchema } from '../../validators/workspaceSchema.js';
import { validate } from '../../validators/zodValidator.js';
import { isAuthenticated } from './../../middleware/authMiddleware.js';


const router=express.Router();

router.post('/',isAuthenticated,validate(createWorkspaceSchema),createWorkspaceController);
router.get('/',isAuthenticated,getWorkspacesUserIsMemberOfController);

router.delete('/:workspaceId',isAuthenticated,deleteWorkspaceController);
router.get('/:workspaceId',isAuthenticated,getWorkspaceController);

router.get('/join/:joinCode',isAuthenticated,getWorkspaceByJoinCodeController);
router.put('/:workspaceId',isAuthenticated,updateWorksapceController);

router.put('/:workspaceId/members',isAuthenticated,validate(addMemberToWorkspaceSchema),addMemberToWorkspaceController);
router.put('/:workspaceId/channels',isAuthenticated,validate(addChannelToWorkspaceSchema),addChannelToWorkspaceController);

export default router;