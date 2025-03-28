
import express from 'express';

import { getMessagesController } from '../../controllers/messageController.js';
import { isAuthenticated } from '../../middleware/authMiddleware.js';

const router = express.Router();

router.get('/:channelId',isAuthenticated,getMessagesController);

export default router;