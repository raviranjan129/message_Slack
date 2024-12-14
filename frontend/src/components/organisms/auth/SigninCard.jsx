import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';


export  const SigninCard=()=>{

    const [signinForm,setSigninForm]=useState({
        email:'',
        password:''
    });
    const navigate=useNavigate();

return (
<Card className="w-full h-full">
<CardHeader>
<CardTitle>Sign In</CardTitle>
<CardDescription>Sign In to access your account</CardDescription>
</CardHeader>

<CardContent>

<form className='space-y-3'>

<Input
placeholder="Enter Your Email"
required={true}
onChange={(e)=>setSigninForm({...signinForm,email:e.target.value})}
value={signinForm.email}
type='email'
disabled={false}

/>

<Input 
placeholder="Password"
required={true}
onChange={(e)=>setSigninForm({...signinForm,password:e.target.value})}
value={signinForm.password}
type='password'
disabled={false}
/>

<Button className="w-full " >
Confirm
</Button>
</form>

<Separator className="my-5"/>

<p>
Don&apos;t have account ? {' '}
    <span 
     className=' text-sky-500  hover:underline cursor-pointer '
     onClick={()=>navigate('/auth/signup')}
     >
        Register
        </span>
</p>

</CardContent>

</Card>
);

};