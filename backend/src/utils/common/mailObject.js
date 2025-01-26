import { APP_LINK, MAIL_Id } from '../../config/serverConfig.js';

export const workspaceJoinMail = function (workspace) {
  return {
    from: MAIL_Id,
    subject: 'You have been added to a workspace',
    text: `Congratulations! You have been added to the workspace ${workspace.name}`
  };
};

export const verifyEmailMail=function(verificationToken){
  return {
    from:MAIL_Id,
    subject:'Welcome to the app. Please verify you email',
    text:`Welcome to the app. Please verify your email by clicking on the link below: ${APP_LINK}/verify/${verificationToken}`
  }
}