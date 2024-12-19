import { useQuery } from '@tanstack/react-query';

import { fetchWorkspaceRequest } from '@/apis/workspace';
import { useAuth } from '@/hooks/context/useAuth';

export const useFetchWorkspace=()=>{

    const {auth}=useAuth();

    const {isFetching,isSuccess,error,data:workspaces}=useQuery({
        queryFn:()=>fetchWorkspaceRequest({token:auth?.token}),
        queryKey:'fetchWorkspaces', //for caching mechanism;
        staleTime:3000
    });

    return {
        isFetching,
        isSuccess,
        error,
        workspaces
    };
};