import { StatusCodes } from "http-status-codes";

import { addChannelToWorkspaceService, addMemberToWorkspaceService, createWorkspaceService, deleteWorkspaceService, getWorkspaceByJoinCodeService, getWorkspaceService, getWorkspacesUserIsMemberOfService, resetWorkspacejoinCodeService, updateWorkspaceService } from "../services/workspaceService.js";
import { customErrorResponse, internalErrorResponse, successResponse } from "../utils/common/responseObjecs.js";

export const createWorkspaceController=async(req,res)=>{
try {
    const response = await createWorkspaceService({
        ...req.body,
        owner:req.user
    })
    return res.status(StatusCodes.CREATED).json(successResponse(response,'workspace created successfully'))
} catch (error) {
    console.log(error);
    if(error.statusCode){
        return res.status(error.statusCode).json(customErrorResponse(error));
    }
    return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .status(internalErrorResponse(error))
}
}

export const getWorkspacesUserIsMemberOfController=async(req,res)=>{
    try {
        const response=await getWorkspacesUserIsMemberOfService(req.user);
        return res
            .status(StatusCodes.OK)
            .json(successResponse(response,'workspace fetched successfully'));
    } catch (error) {
        console.log(error);

        if(error.statusCode){
            return res.status(error.statusCode).json(customErrorResponse(error));
        }
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(internalErrorResponse)
    }
}


export const deleteWorkspaceController = async (req, res) => {
    try {
      const response = await deleteWorkspaceService(
        req.params.workspaceId,
        req.user
      );
      return res
        .status(StatusCodes.OK)
        .json(successResponse(response, 'Workspace deleted successfully'));
    } catch (error) {
      console.log(error);
      if (error.statusCode) {
        return res.status(error.statusCode).json(customErrorResponse(error));
      }
  
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(internalErrorResponse(error));
    }
  };

  export const getWorkspaceController=async(req,res)=>{
    try {
        const response = await getWorkspaceService(
            req.params.workspaceId,
            req.user
        );
        return res.status(StatusCodes.OK).json(successResponse(response,'Workspace fetched successfully'))
    } catch (error) {
        console.log("Get workspace controller error",error);
        if(error.statusCode){
            return res.status(error.statusCode).json(customErrorResponse(error));
        }

        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(internalErrorResponse(error));

    }
  }

export const getWorkspaceByJoinCodeController= async(req,res)=>{
    try {
        const response= await getWorkspaceByJoinCodeService(
            req.params.joinCode,
            req.user
        )

        return res.status(StatusCodes.OK).json(successResponse(response,'Workspace by join code fetched successfully'))
    } catch (error) {
        console.log("Get workspaceByJoinCode Controller error",error);

        if(error.statusCode){
            return res.status(error.statusCode).json(customErrorResponse(error));
        }

        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(internalErrorResponse(error));
    }
}

export const updateWorksapceController=async(req,res)=>{
    try {
        const response = await updateWorkspaceService(
            req.params.workspaceId,
            req.body,
            req.user
        );

        return res
                .status(StatusCodes.OK)
                .json(successResponse(response,'Workspace updated successfully'));

    } catch (error) {
        console.log("update workspace Controller error",error);

        if(error.statusCode){
            return res.status(error.statusCode).json(customErrorResponse(error));
        }

        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(internalErrorResponse(error));
    }
}


export const addMemberToWorkspaceController=async(req,res)=>{
    try {
        const response = await addMemberToWorkspaceService(
            req.params.workspaceId,
            req.body.memberId,
            req.body.role || 'member',
            req.user
        )

        return res
                .status(StatusCodes.OK)
                .json(successResponse(response,'Member added successfully'))
    } catch (error) {
        console.log("add member to workspace controller error",error);

        if(error.statusCode){
            return res.status(error.statusCode).json(customErrorResponse(error));
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(internalErrorResponse(error));
    }
}


export const addChannelToWorkspaceController=async(req,res)=>{
    try {
        const response = await addChannelToWorkspaceService(
            req.params.workspaceId,
            req.body.channelName,
            req.user
        )
        return res
                .status(StatusCodes.OK)
                .json(successResponse(response,'Channel added successfully'));
    } catch (error) {
        console.log('add channel to workspace controller error',error);
        if(error.statusCode){
            return res.status(error.statusCode).json(customErrorResponse(error));
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(internalErrorResponse(error));
    }
}


export const resetJoinCodeController=async(req,res)=>{
    try {
        const response = await resetWorkspacejoinCodeService(
            req.params.workspaceId,
            req.user
        
        );
        return res
        .status(StatusCodes.OK)
        .json(successResponse(response,'join code reset successfully'));
    } catch (error) {
        console.log('reset join code controller error',error);
        if(error.statusCode){
            return res.status(error.statusCode).json(customErrorResponse(error));
        }
    }
}