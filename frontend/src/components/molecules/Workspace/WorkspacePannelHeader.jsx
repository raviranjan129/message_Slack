import { DropdownMenu, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import {  ChevronDownIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const WorkspacePanelHeader=({workspace}) =>{
return(
    <div className="flex items-center justify-between px-4 h-[50px] gap-0.5 ">

        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button>
                    <span className="truncate">
                        {workspace?.name}
                    </span>
                    <ChevronDownIcon className="size-5 ml-1" />
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>

    </div>
);
};