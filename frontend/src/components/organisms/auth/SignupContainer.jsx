import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignup } from '@/hooks/apis/auth/useSignup';

import { SignupCard } from './SignupCard';

export const SignupContainer=()=>{
    const [signupForm,setSignupForm]=useState({
        email:'',
        password:'',
        username:''
    });

    const navigate = useNavigate();

    const [validationError,setValidationError]=useState(null);

    const { isPending,isSuccess,error,signupMutation}=useSignup();

    async function onSignupFromSubmit(e) {
        e.preventDefault();
        console.log('Signup form submitted',signupForm);
        setValidationError({message:'All fields are required'});

        if(!signupForm.email || !signupForm.password || !signupForm.username){
            console.log('All fields are required');
            return;
        }


        setValidationError(null);

        await signupMutation({
            email:signupForm.email,
            password:signupForm.password,
            username:signupForm.username
        });

        
    }

useEffect(()=>{
if(isSuccess){
   setTimeout(() => {
    navigate('/auth/signin');
   }, 3000);
}
},[isSuccess,navigate ]);

    return(
<SignupCard 
error={error}
isPending={isPending}
isSuccess={isSuccess}
signupForm={signupForm}
 setSignupForm={setSignupForm} 
 validationError={validationError}
 onSignupFromSubmit={onSignupFromSubmit}
 />
    );

};