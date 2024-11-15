
import { StatusCodes } from 'http-status-codes';

import { signUpService } from '../services/userServices.js';
import { customErrorResponse, internalErrorResponse, successResponse } from '../utils/common/responseObjecs.js';
export const signUp=async(req,res)=>{
    try {
        
const user = await signUpService(req.body);
return res
        .status(StatusCodes.CREATED)
        .json(successResponse(user,'User created successfullyl'));

    } catch (error) {
        console.log("User controller error",error);
        if(error.StatusCodes){
            return res.status(error.StatusCodes).json(customErrorResponse(error));
        }
        return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json(internalErrorResponse(error));
    }
}