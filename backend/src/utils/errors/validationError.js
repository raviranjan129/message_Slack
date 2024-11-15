
import { StatusCodes } from 'http-status-codes';
class ValidationError extends Error{
    constructor(errorDetails,message){
        super(message);
        this.name='ValidationError';
        let explanation=[];
        Object.keys(errorDetails.error).forEach((key)=>{
            explanation.push(errorDetails.error[key]);
        });
        this.explanation=explanation;
        this.message=message;
        this.StatusCodes=StatusCodes.BAD_REQUEST;
    }
}

export default ValidationError;