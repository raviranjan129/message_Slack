import { useMutation } from '@tanstack/react-query';

import { addMemberToWorkspaceRequest } from '@/apis/workspace';
import { useAuth } from '@/hooks/context/useAuth';


export const useAddMemberToWorksapce=({workspaceId})=>{

    const {auth}=useAuth();

    const {mutateAsync:AddMemberToWorkspaceMutation,isSuccess,isPending,error} = useMutation({
            mutationFn:()=>addMemberToWorkspaceRequest({workspaceId,token:auth?.token}),

            onSuccess:()=>{
                console.log('SuccessFully added Member to workspace');
            },
            onError:()=>{
                console.log('Error in add member to workspace');
            }
    });

    return{
        AddMemberToWorkspaceMutation,
        isSuccess,
        isPending,
        error
    };
};