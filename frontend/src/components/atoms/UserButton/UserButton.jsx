import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { LogOutIcon, SettingsIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/hooks/context/useAuth';
import { useToast } from '@/hooks/use-toast';

export const UserButton = () => {

    const navigate=useNavigate();
    const { auth,logout } = useAuth();
    const {toast}=useToast();

    async function  handleLogout() {
        await logout();
        toast({
            title:'Successfully signed out',
            message:'You will be redirected to the signin page in a few seconds',
            type:'Success'
        });
        navigate('/auth/signin');
        
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none relative">
                <Avatar className="size-10 hover:opacity-65 transition">
                    <AvatarImage src={auth?.user?.avatar} />
                    <AvatarFallback>{auth?.user?.username[0].toUpperCase()}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem className="flex items-center">
                    <SettingsIcon className="mr-2 h-4 w-4" />
                    Settings
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center" onClick={handleLogout}>
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
