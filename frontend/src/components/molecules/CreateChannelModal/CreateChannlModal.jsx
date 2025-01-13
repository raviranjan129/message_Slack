import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal';

export const CreateChannelModal = ()=>{
    const {openCreateChannelModal,setOpenCreateChannelModal} = useCreateChannelModal();

    const [channelName,setChannelName]=useState('');


    function handleClose(){
        setOpenCreateChannelModal(false);
    }

    function handleFromSubmit(e){
        e.preventDefault();
    }

    return (
        <Dialog
        open={openCreateChannelModal}
        onOpenChange={handleClose}
        >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Create Channel
                    </DialogTitle>
                </DialogHeader>

                <form onSubmit={handleFromSubmit}>
                    <Input
                    value={channelName}
                    onChange={(e)=>setChannelName(e.target.value)}
                    minLength={3}
                    placeholder='Channel Name e.g. announcement team'
                    required
                    />
                    
                    <div className="flex justify-end mt-4">
                        <Button>
                            Create Channel
                        </Button>
                    </div>
                   
                </form>
            </DialogContent>

        </Dialog>
    );
};