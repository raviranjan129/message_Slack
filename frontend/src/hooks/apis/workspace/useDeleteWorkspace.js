import { useMutation } from '@tanstack/react-query';

import { deleteWorkspaceRequest } from '@/apis/workspace';
import { useAuth } from '@/hooks/context/useAuth';

export const useDeleteWorkspace =(workspaceId)=>{

    const {auth}=useAuth(); //  for getting token ;

    const {isPending,isSuccess,error,mutateAsync:deleteWorkspacemutation} = useMutation({
        mutationFn:()=>deleteWorkspaceRequest({workspaceId,token:auth?.token}),
        onSuccess:()=>{
            console.log(' workspace Deleted Successfully');
        },
        onError:(error)=>{
            console.log('Error in Deleting workspace',error);
        }
    });

    return{
        isPending,
        isSuccess,
        error,
        deleteWorkspacemutation
    };
};