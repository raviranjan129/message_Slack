import {  createContext, useState } from 'react';

const CreateWorkspaceContext=createContext();

export const CreateWorksapceContextProvider=({Children})=>{
    const [openCreateWorkspaceModal,setOpenCreateWorkspaceModal]=useState(false);

return(
    <CreateWorkspaceContext.Provider value={{openCreateWorkspaceModal,setOpenCreateWorkspaceModal}}>
        {Children}
    </CreateWorkspaceContext.Provider>
);

};


export default CreateWorkspaceContext;