import { StatusCodes } from "http-status-codes";

import workspaceRepository from "../repositories/workspaceRepository.js"
import ClientError from "../utils/errors/clientError.js";
import { userRepository } from './../repositories/userRepository.js';
import { isUserMemberOfworkspace } from "./workspaceService.js";

export const isMemberPartofWorkspaceService=async(workspaceId,memberId)=>{

    const workspace=await workspaceRepository.getById(workspaceId);

if(!workspace){
    throw new ClientError({
        explanation:'Workspace not found ',
        message:'Workspace not found',
        statusCode:StatusCodes.NOT_FOUND
    })
}

    const isUserAMember = isUserMemberOfworkspace(workspace,memberId);

    if(!isUserAMember){
        throw new ClientError({
            explanation:'User is not a member of the workspace',
            message:"user is not a member of the workspace",
            StatusCode:StatusCodes.UNAUTHORIZED
        })
    }

    const user = await userRepository.getById(memberId);
    return user;
}