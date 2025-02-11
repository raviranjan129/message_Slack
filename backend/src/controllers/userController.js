
import { StatusCodes } from 'http-status-codes';

import { signInService, signUpService } from '../services/userServices.js';
import { customErrorResponse, internalErrorResponse, successResponse } from '../utils/common/responseObjects.js';

export const signUp=async(req,res)=>{
    try {
        
const user = await signUpService(req.body);
return res
        .status(StatusCodes.CREATED)
        .json(successResponse(user,'User created successfully'));

        
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

export const signIn=async(req,res)=>{
    try {
        const response=await signInService(req.body);
        console.log(response)
        return res.status(StatusCodes.OK).json(successResponse(response,'user signed in successfully'));
    } catch (error) {
        console.log('user controller error',error);

        if(error.StatusCodes){
            return res.status(error.StatusCode).json(customErrorResponse(error));
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(internalErrorResponse(error));
    }
}