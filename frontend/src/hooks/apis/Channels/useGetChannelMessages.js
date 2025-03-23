
import { useQuery } from '@tanstack/react-query';

import {  getPaginatedMessages } from '@/apis/Channel';
import { useAuth } from '@/hooks/context/useAuth';


export const useGetChannelMessages = (channelId) => {
    const { auth } = useAuth();
    const { isFetching, isError,data, error,isSuccess } = useQuery({
        queryFn:()=>getPaginatedMessages({channelId,limit:10,offset:0,token:auth?.token}),
        queryKey:['getPaginatedMessages']
    });

    return {
        isFetching,
        isError,
        messages:data,
        error,
        isSuccess
    };

};
