import { useQuery } from '@tanstack/react-query';

import { fetchWorkspaceDetailsRequest } from '@/apis/workspace';
import { useAuth } from '@/hooks/context/useAuth';

export const useGetWorkspaceById=(id)=>{

    const {auth} = useAuth();
    const {isFetching,isSuccess,error,data:workspaces}=useQuery({
        queryKey:[`fetchWorkspaceById-${id}`],
        queryFn:(id)=>fetchWorkspaceDetailsRequest({workspaceId:id,token:auth?.token}),

staleTime:10000
    });

    return{
        isFetching,
        isSuccess,
        error,
        workspaces
    };
};