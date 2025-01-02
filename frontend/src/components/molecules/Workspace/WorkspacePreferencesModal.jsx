import { TrashIcon } from 'lucide-react';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useWorkspacePreferencesModal } from '@/hooks/context/UseWorkspacePreferencesModal';

export const WorkspacePreferencesModal = ()=>{
    

    const {initialValue,openPreferences,setOpenPreferences} = useWorkspacePreferencesModal();

    function handleClose(){
        setOpenPreferences(false);
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

    <p>{initialValue}</p>
</p>

<p  className='text-sm font-semibold'>
    Edit
</p>
 </div>
</div >

<button className='flex items-center gap-x-2 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50' >
<TrashIcon className='size-5' />
    <p className='text-sm font-semibold'>
 
        Delete Workspace
    </p>
</button>
    </div>
</DialogContent>
        </Dialog>
    );
};