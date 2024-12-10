//getChannelById

import { StatusCodes } from "http-status-codes";

import channelRepository from "../repositories/channelRepository.js";
import messageRepository from "../repositories/messageRepository.js";
import ClientError from "../utils/errors/clientError.js";
import { isUserMemberOfworkspace } from "./workspaceService.js";

export const getChannelByIdService = async (channelId, userId) => {
  try {
    const channel =
      await channelRepository.getChannelWithWorkspaceDetails(channelId);
    console.log(channel);

    if (!channel || !channel.workspaceId) {
      throw new ClientError({
        message: "Channel not found",
        explanation: "Channel not found",
        statusCode: StatusCodes.NOT_FOUND
      });
    }

    const isUserPartOfWorkspace = isUserMemberOfworkspace(
      channel.workspaceId,
      userId
    );
    if (!isUserPartOfWorkspace) {
      throw new ClientError({
        message:
          "User is not member of the workspace and hence can not access the channel",
        explanation: "User is not a member of the workspace",
        statusCode: StatusCodes.UNAUTHORIZED
      });
    }

    const messages=await messageRepository. getPaginatedMessages({channelId},1,20)
console.log('Channel in service ',channel);

return {
messages,
_id:channel._id,
name:channel.name,
createdAt:channel.createdAt,
updatedAt:channel.updatedAt,
workspaceId:channel.workspaceId

}

    
  } catch (error) {
    console.log("get channel ById error", error);
    throw error;
  }
};



