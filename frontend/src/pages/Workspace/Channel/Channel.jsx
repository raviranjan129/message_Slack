import { Loader2Icon, TriangleAlertIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { useGetChannelById } from '@/hooks/apis/Channels/useGetChannelById';
import { ChatInput } from '@/components/molecules/ChatInput/ChatInput';

export const Channel=()=>{

    const {channelId}=useParams();

    const {channelDetails,isFetching,isError}=useGetChannelById(channelId);

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
            <div className='flex-1'>
            <ChatInput/>
            </div>

           
        </div>
    );
};