import { useQueryClient } from '@tanstack/react-query';
import { TrashIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useDeleteWorkspace } from '@/hooks/apis/workspace/useDeleteWorkspace';
import { useUpdateWorkspace } from '@/hooks/apis/workspace/useUpdateWorkspace';
import { useConfirm } from '@/hooks/context/useConfirm';
import { useWorkspacePreferencesModal } from '@/hooks/context/UseWorkspacePreferencesModal';
import { useToast } from '@/hooks/use-toast';

export const WorkspacePreferencesModal = ()=>{
    
    const queryClient=useQueryClient();

    const [workspaceId,setWorkspaceId]=useState(null);
    const [editOpen,setEditOpen] = useState(false);
    

    const navigate=useNavigate();

    const {toast} = useToast();
    const {isPending,updateWorkspaceMutation}=useUpdateWorkspace(workspaceId);

    const {initialValue,openPreferences,setOpenPreferences,workspace } = useWorkspacePreferencesModal();

    const [renameValue,setRenameValue] =useState(workspace?.name);
    const {deleteWorkspacemutation} = useDeleteWorkspace(workspaceId);

   const {confirmation,ConfirmDialog}= useConfirm({title:'Do You want to Delete?',message:'This action cannot be undone'});

   const {confirmation:updateConfirmation,ConfirmDialog:UpdateDialog}=useConfirm({title:'Do you want to update the workspace',message:'This can be undone'});

    async function handleFormSubmit(e){
        e.preventDefault();
        try {
            const ok = await updateConfirmation();
            if(!ok){
                return;
            }
            await updateWorkspaceMutation(renameValue);
            queryClient.invalidateQueries(`fetchWorkspaceById-${workspace?._id}`);
            setOpenPreferences(false);
            toast({
                title:'Workspace updated successfully',
                type:'success'
            });
        } catch (error) {
            console.log('Error in updating workspace',error);
            toast({
                title:'Error in updating workpsace',
                type:'error'
            });
        }
    }

    function handleClose(){
        setOpenPreferences(false);
    }

    useEffect(()=>{
setWorkspaceId(workspace?._id);
setRenameValue(workspace?.name);
    },[workspace]);

 async function handleDelete(){
try {
    const ok=await confirmation();
    if(!ok){
        return;
    }
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
        <>
        <ConfirmDialog/>
        <UpdateDialog/>
        <Dialog open={openPreferences} onOpenChange={handleClose}>
<DialogContent>
    <DialogHeader>
        <DialogTitle>
            {initialValue}
        </DialogTitle>
    </DialogHeader>
    <div className='px-4 pb-4 flex flex-col gap-y-2'>

<Dialog open={editOpen} onOpenChange={setEditOpen}>
    <DialogTrigger>
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
    </DialogTrigger>

<DialogContent>
    <DialogHeader>
        <DialogTitle>
            Rename Workspace
        </DialogTitle>
    </DialogHeader>

<form className='space-y-4 ' onSubmit={handleFormSubmit}>
    <Input 
    value={renameValue}
    onChange={(e)=>setRenameValue(e.target.value)}
    required
    autoFocus
    minLength={3}
    maxLength={50}
    disabled={isPending}
    placeholder="workspace Name e.g. Design Team"
    />


<DialogFooter>
    <DialogClose>
        <Button 
        variant='outline'
        disabled={isPending}
        >
            Cancel
        </Button>
    </DialogClose>

<Button type='submit' disabled={isPending} >
    Save
</Button>

</DialogFooter>

</form>
</DialogContent>

</Dialog>

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
        </>
    );
};