
import { createContext, useState } from 'react';

const WorkspacePreferencesModalContext=createContext();

export const WorkspacePreferencesModalContextProvider= ({children})=>{

const [openPreferences,setOpenPreferences]=useState(false);


    return (
        <WorkspacePreferencesModalContext.Provider value={{openPreferences,setOpenPreferences}}>
            {children}
        </WorkspacePreferencesModalContext.Provider>
    );
};