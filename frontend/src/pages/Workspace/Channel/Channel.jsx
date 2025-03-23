import { useQueryClient } from '@tanstack/react-query';
import { Loader2Icon, TriangleAlertIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { ChannelHeader } from '@/components/molecules/Channel/ChannelHeader';
import { ChatInput } from '@/components/molecules/ChatInput/ChatInput';
import { Message } from '@/components/molecules/Message/Message';
import { useGetChannelById } from '@/hooks/apis/Channels/useGetChannelById';
import { useGetChannelMessages } from '@/hooks/apis/Channels/useGetChannelMessages';
import { useChannelMessages } from '@/hooks/context/useChannelMessages';
import { useSocket } from '@/hooks/context/useSocket';


export const Channel = () => {
    const { channelId } = useParams();
    const queryclient=useQueryClient();
    const { channelDetails, isFetching, isError } = useGetChannelById(channelId);
    const { joinChannel } = useSocket();
    const { messages,isSuccess } = useGetChannelMessages(channelId);
    const {setMessageList,messageList}=useChannelMessages();
  

    const messageContainerListRef=useRef(null);
         
    useEffect(()=>{
      if(messageContainerListRef.current){
        messageContainerListRef.current.scrollTop=messageContainerListRef.current.scrollHeight;
      }
    },[messageList]);

    useEffect(()=>{
console.log('channelId',channelId);
  queryclient.invalidateQueries('getPaginatedMessages');
    },[channelId]);

    
    useEffect(() => {
      if (!isFetching && !isError) {
        
        joinChannel(channelId);
      }
    }, [isFetching, isError,joinChannel, channelId]);


    useEffect(()=>{
if(isSuccess){
  console.log('channel messages fetched');
  setMessageList(messages);
  
}
},[isSuccess,messages,setMessageList]);
  
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
        <div 
        ref={messageContainerListRef}
        className="flex-5 overflow-y-auto px-5 gap-y-2"
        
        > {/** to make message scrollable */}

          {messageList?.map((message) => (
            <Message
              key={message._id}
              body={message.body}
              authorImage={message.senderId?.avatar}
              authorName={message.senderId?.username}
              createdAt={message.createdAt}
              image={message.image}
            />
          ))}
        </div>
  
       
        <div className="flex-1">
          <ChatInput />
        </div>
      </div>
    );
  };
  