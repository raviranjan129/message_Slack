import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCreateWorkspace } from '@/hooks/apis/workspace/useCreateWorkspace';
import { useCreateWorkspaceModal } from '@/hooks/context/useCreateWorkspaceModal';

export const CreateWorkspaceModal=()=>{

    const {openCreateWorkspaceModal,setOpenCreateWorkspaceModal}=useCreateWorkspaceModal();
  const {isPending,createWorkspaceMutation}=  useCreateWorkspace();

    const [workspacename,setWorkspacename]=useState();

    const navigate=useNavigate();

    function handleClose(){
setOpenCreateWorkspaceModal(false);
    }

    async function handleFromSubmit(e){
        e.preventDefault();
        try {
        const data= await createWorkspaceMutation({name:workspacename});
        console.log('Created the worksapce',data);
            // navigate('/workspaces');
        } catch (error) {
            console.log('Not able to create a new workspace',error);
        }finally{
            setWorkspacename('');
            setOpenCreateWorkspaceModal(false);
        }
    }

    return(
        <Dialog
        open={openCreateWorkspaceModal}
        onOpenChange={handleClose}
        >

<DialogContent>

    <DialogHeader>
        <DialogTitle>
            Create a new workspace
        </DialogTitle>
    </DialogHeader>

<form onSubmit={handleFromSubmit}>
    <Input
    required
    disabled={isPending}
    minLength={3}
    placeholder="Put the workspace name e.g MyWorkspace"
    value={workspacename}
    onChange={(e)=>setWorkspacename(e.target.value)}
    />

<div className='flex justify-end mt-5' >
    <Button disabled={isPending}>
        Create Workspace
    </Button>
</div>

</form>

</DialogContent>

        </Dialog>
    );
};