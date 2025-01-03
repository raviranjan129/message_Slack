import { TrashIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useDeleteWorkspace } from '@/hooks/apis/workspace/useDeleteWorkspace';
import { useWorkspacePreferencesModal } from '@/hooks/context/UseWorkspacePreferencesModal';
import { useToast } from '@/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const WorkspacePreferencesModal = ()=>{
    
    const queryClient=useQueryClient();

    const [workspaceId,setWorkspaceId]=useState(null);

    const navigate=useNavigate();

    const {toast} = useToast();

    const {initialValue,openPreferences,setOpenPreferences,workspace } = useWorkspacePreferencesModal();

    const {deleteWorkspacemutation} = useDeleteWorkspace(workspaceId);

    function handleClose(){
        setOpenPreferences(false);
    }

    useEffect(()=>{
setWorkspaceId(workspace?._id);
    },[workspace]);

 async function handleDelete(){
try {
    await deleteWorkspacemutation();
    navigate('/home');
    queryClient.invalidateQueries('fetchWorkspaces');
    setOpenPreferences(false);
    toast({
        title:'Workspace Deleted successfully',
        type:'Success'
    });
} catch (error) {
    console.log('Error in deleting workspace',error);
    toast({
        title:'error in deleting workspace',
        type:'error'
    });
}
}

    return (
        <Dialog open={openPreferences} onOpenChange={handleClose}>
<DialogContent>
    <DialogHeader>
        <DialogTitle>
            {initialValue}
        </DialogTitle>
    </DialogHeader>
    <div className='px-4 pb-4 flex flex-col gap-y-2'>

<div className='px-5 bg-white rounded-lg py-4 border cursor-pointer hover:bg-gray-50'>
 <div className='flex items-center justify-between'>

<p className='font-semibold text-sm'>
    workspace Name

   
</p>

<p  className='text-sm font-semibold'>
    Edit
</p>
 </div>
 <p>{initialValue}</p>
</div >

<button 
className='flex items-center gap-x-2 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50'
onClick={handleDelete}
>
<TrashIcon className='size-5' />
    <p className='text-sm font-semibold' >
 
        Delete Workspace
    </p>
</button>
    </div>
</DialogContent>
        </Dialog>
    );
};