import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { FaCaretDown, FaCaretRight } from 'react-icons/fa';

import { Button } from '@/components/ui/button';

export const WorkspacePanelSection =({children,label,onIconClick})=>{
    const [open,setOpen] = useState(true);

return(
    <div className="flex flex-col mt-3 px-2">
        <div className="flex items-center px-3.5 group">
            <Button
            onClick={()=>setOpen(!open)}
            variant='transparent'
            className='p-0.5 text-sm size-6 text-[#f9edffcc]'
            >
                   {open ?  <FaCaretDown  className='size-4'/>:<FaCaretRight className='size-4' />}
            </Button>

            <Button 
            variant='transparent'
            size='sm'
            className='group px-1.5 text-sm text-[#f9edffcc] h-[30px] justify-start items-center overflow-hidden'
            >
                        <span>{label}</span>
            </Button>

                {onIconClick && (
                    <Button 
                    variant='transparent'
                     size='sm'
                      className=' transition opacity ml-auto p-0.5 text-sm size-6 text-[#f9edffcc'
                      onClick={onIconClick}
                      >
                        <PlusIcon className='size-4' />
                    </Button>
                )}

        </div> 
            {open && children}                

    </div>
);

};
//render children when open