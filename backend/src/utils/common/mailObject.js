import { MAIL_Id } from "../../config/serverConfig.js";

export const workspaceJoinMail= function(workspace){
return {
    from:MAIL_Id,
    subject:'Your have been added to a workspace',
           text:` congratulations! You have been added to  the workspace ${workspace.name}`
}
}