import { MAIL_Id } from '../../config/serverConfig.js';

export const workspaceJoinMail = function (workspace) {
  return {
    from: MAIL_Id,
    subject: 'You have been added to a workspace',
    text: `Congratulations! You have been added to the workspace ${workspace.name}`
  };
};