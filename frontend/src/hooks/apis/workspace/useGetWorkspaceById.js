import { useQuery } from '@tanstack/react-query';

import { fetchWorkspaceDetailsRequest } from '@/apis/workspace';
import { useAuth } from '@/hooks/context/useAuth';

export const useGetWorkspaceById=(id)=>{

    const {auth} = useAuth();
    const {isFetching,isSuccess,error,data:workspace}=useQuery({
        queryFn:(id)=>fetchWorkspaceDetailsRequest({workspaceId:id,token:auth?.token}),
queryKey:[`fetchWorkspaceById-${id}`],
staleTime:10000
    });

    return{
        isFetching,
        isSuccess,
        error,
        workspace
    };
};