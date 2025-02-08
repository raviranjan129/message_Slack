import { Loader2Icon, TriangleAlertIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { ChannelHeader } from '@/components/molecules/Channel/ChannelHeader';
import { ChatInput } from '@/components/molecules/ChatInput/ChatInput';
import { useGetChannelById } from '@/hooks/apis/Channels/useGetChannelById';
import { useEffect } from 'react';
import { useSocket } from '@/hooks/context/useSocket';

export const Channel=()=>{

    const {channelId}=useParams();

    const {channelDetails,isFetching,isError}=useGetChannelById(channelId);

    const {joinChannel}=useSocket();

    useEffect(()=>{

        if(!isFetching && !isError){
            joinChannel(channelId);
        }

    },[isFetching,isError,channelId]);

    if(isFetching){
        return (
            <div className='h-full flex flex-1 items-center justify-center '>
                <Loader2Icon className='size-5 animate-spin text-muted-foreground' />
            </div>
        ); 
    }


    if(isError){
        return (
            <div className='h-full flex flex-1 items-center justify-center'>
             <TriangleAlertIcon className='size-6 text-muted-foreground' />
             <span className='text-sm text-muted-foreground'>Channel Not Found</span>
            </div>
        );
    }

    return (
        <div className='flex flex-col h-full'>

       <ChannelHeader name={channelDetails?.name} />

            <div className='flex-1'>
            <ChatInput/>
            
            </div>
              
           
        </div>
    );
};