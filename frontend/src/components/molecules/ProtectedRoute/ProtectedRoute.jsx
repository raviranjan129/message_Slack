import { LucideLoader2 } from 'lucide-react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@/hooks/context/useAuth';

export const ProctedRoute=({Children})=>{

    const {auth} = useAuth();

    if(auth.isLoading){
        return <div><LucideLoader2 className="animate-spin ml-2" /></div>;
    }
    if(!auth.user || !auth.token){
        return <Navigate to="/auth/signin"/>;
    
    }
    return Children;
};