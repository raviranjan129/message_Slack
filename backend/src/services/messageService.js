import messageRepository from "../repositories/messageRepository.js"

export const getMessageService=async(messageParams,page,limit)=>{
    const messages=await messageRepository.getPaginatedMessages(
        messageParams,
        page,
        limit
    )
    return messages;
};