import { useContext } from 'react';

import CreateWorkspaceContext from '@/context/CreateWorksapceContext';

export const useCreateWorkspaceModal=()=>{

    return useContext(CreateWorkspaceContext);

};