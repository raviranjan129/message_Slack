import { AlertTriangleIcon, HashIcon, Loader, MessageSquareTextIcon, SendHorizonalIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { SideBarItem } from '@/components/atoms/SideBarItem/SideBarItem';
import { WorkspacePanelSection } from '@/components/molecules/Workspace/WorkspacePanelSection';
import { WorkspacePanelHeader } from '@/components/molecules/Workspace/WorkspacePannelHeader';
import { useGetWorkspaceById } from '@/hooks/apis/workspace/useGetWorkspaceById';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal';

export const WorkspacePanel=()=>{

const {workspaceId} =useParams();

const {setOpenCreateChannelModal} = useCreateChannelModal();

const {workspace,isFetching,isSuccess} = useGetWorkspaceById(workspaceId);

if(isFetching){
    return (
        <div className='flex flex-col gap-y h-full items-center justify-center text-white'>
            <Loader className="animate-spin size-6 text-white " />
        </div>
    );
}

if(!isSuccess){
    return(
        <div className='flex flex-col gap-y h-full items-center justify-center text-white'>
            <AlertTriangleIcon className='size-6 text-white'/>
            Something went wrong
        </div>
    );
}


    return(
<div className="flex flex-col h-full bg-slack-medium">
<WorkspacePanelHeader workspace={workspace}/>

<div className='flex flex-col px-2 mt-3'>
<SideBarItem 
label='Threads'
 icon={MessageSquareTextIcon}
  id='threads'
   variant='active'
   
   />
</div>

<div className='flex flex-col px-2 mt-3'>
<SideBarItem 
label='Drafts $ Sends'
 icon={SendHorizonalIcon}
  id='drafts'
   variant='default'
   
   />
</div>

<WorkspacePanelSection
label={'channels'}
onIconClick={()=>setOpenCreateChannelModal(true)}
>
    {workspace?.channels?.map((channel)=>{
        return <SideBarItem key={channel._id} icon={HashIcon} label={channel.name} />;
    })}
</WorkspacePanelSection>

</div>
    );
};