import { Loader2Icon, TriangleAlertIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ChannelHeader } from '@/components/molecules/Channel/ChannelHeader';
import { ChatInput } from '@/components/molecules/ChatInput/ChatInput';
import { Message } from '@/components/molecules/Message/Message';
import { useGetChannelById } from '@/hooks/apis/Channels/useGetChannelById';
import { useGetChannelMessages } from '@/hooks/apis/Channels/useGetChannelMessages';
import { useSocket } from '@/hooks/context/useSocket';

export const Channel = () => {
    const { channelId } = useParams();
    const { channelDetails, isFetching, isError } = useGetChannelById(channelId);
    const { joinChannel } = useSocket();
    const { messages } = useGetChannelMessages(channelId);
  
    useEffect(() => {
      if (!isFetching && !isError) {
        joinChannel(channelId);
      }
    }, [isFetching, isError, channelId]);
  
    if (isFetching) {
      return (
        <div className="h-full flex flex-1 items-center justify-center">
          <Loader2Icon className="size-5 animate-spin text-muted-foreground" />
        </div>
      );
    }
  
    if (isError) {
      return (
        <div className="h-full flex flex-1 items-center justify-center">
          <TriangleAlertIcon className="size-6 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Channel Not Found</span>
        </div>
      );
    }
  
    return (
      <div className="flex flex-col h-full">
        {/* Channel Header */}
        <ChannelHeader name={channelDetails?.name} />
  
        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto px-4 space-y-2">
          {messages?.map((message) => (
            <Message
              key={message._id}
              body={message.body}
              authorImage={message.senderId?.avatar}
              authorName={message.senderId?.username}
              createdAt={message.createdAt}
            />
          ))}
        </div>
  
        {/* Chat Input at Bottom */}
        <div className="sticky bottom-0 bg-white border-t p-4">
          <ChatInput />
        </div>
      </div>
    );
  };
  