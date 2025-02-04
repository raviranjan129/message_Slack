import 'quill/dist/quill.snow.css';

import Quill from 'quill';
import { useEffect, useRef, useState } from 'react';

export const Editor=({
    variant='create',
    onSubmit,
    onCancel,
    placeholder,
    disabled,
    defaultValue
})=>{

const [text,setText]=useState('');
const [isToolbarVisible,setIsToolbarVisible]=useState(false);

const containerRef=useRef(); //req. to initialize the editor;
const submitRef=useRef();
const quillRef=useRef();
const defaultValueRef=useRef();
const disabledRef=useRef();
const placeholderRef=useRef();


useEffect(() => {

    if(!containerRef.current) return; // if containerRef is not initialized, return

    const container = containerRef.current; // get the container element

    const editorContainer = container.appendChild(container.ownerDocument.createElement('div')); // create a new div element and append it to the container

    const options = {
        theme: 'snow',
        modules: {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                ['link'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['clean']
            ],
            keyboard: {
                bindings: {
                    enter: {
                        key: 'Enter',
                        handler: () => {
                            return;
                        }
                    },
                    shift_enter: {
                        key: 'Enter',
                        shiftKey: true,
                        handler: () => {
                            quill.insertText(quill.getSelection()?.index || 0, '\n'); // insert a new line
                        }
                    }
                }
            }
        }
    };

    const quill = new Quill(editorContainer, options);

    quillRef.current = quill;
    quillRef.current.focus();

    quill.setContents(defaultValueRef.current);

}, []);    

    return(
        <div className='flex flex-col'>
           <div className='flex flex-col border border-slate-300 rounded-md overflow-hidden focus-within:shadow-sm focus-within:border-slate-400 bg-white transition focus-within:'>
                      <div ref={containerRef}/>
                       
           </div>

           <p className='p-2 text-[10px] text-mutes-forground flex justify-end'>
            <strong>Shift + Enter </strong> &nbsp; to add a new line
           </p>
        </div>
    );
};