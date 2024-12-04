import mailQueue from "../queues/mailQueue.js"

export const addEmailtoMailQueue=async(emailData)=>{
    try {
      await mailQueue.add(emailData);
      console.log("Email added to mail queue");
    } catch (error) {
        console.log('Add email to mail queue error',error);
    }

}