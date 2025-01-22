import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ResetJoinCodeRequest } from '@/apis/workspace';
import { useAuth } from '@/hooks/context/useAuth';

export const useResetJoinCode=(workspaceId)=>{

    const {auth}=useAuth();
    const QueryClient=useQueryClient();

    const {mutateAsync:ResetJoincodeMutation,isSuccess,isPending,error}=useMutation({
        mutationFn:()=>ResetJoinCodeRequest({workspaceId,token:auth?.token}),
        onSuccess:()=>{
            console.log('Reset join code successfully');
            QueryClient.invalidateQueries(`fetchWorkspaceById-${workspaceId}`);
        },
        onError:()=>{
            console.log('Error in Join code reset');
        }
    });

    return{
            ResetJoincodeMutation,
            isSuccess,
            isPending,
            error
    };

};