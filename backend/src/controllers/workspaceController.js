import { StatusCodes } from "http-status-codes";

import { createWorkspaceService, deleteWorkspaceService, getWorkspaceService, getWorkspacesUserIsMemberOfService } from "../services/workspaceService.js";
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