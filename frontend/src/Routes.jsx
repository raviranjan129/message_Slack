import { Route, Routes } from 'react-router-dom';

import { SigninContainer } from '@/components/organisms/auth/SigninContainer';
import { SignupContainer } from '@/components/organisms/auth/SignupContainer';
import { Auth } from '@/pages/auth/Auth';
import { Notfound } from '@/pages/NotFound/Notfound';


 export const AppRoutes = ()=>{

    <Routes>
    <Route path='/auth/signup' element={<Auth><SignupContainer/></Auth>}/>
    <Route path='/auth/signin' element={<Auth><SigninContainer/></Auth>}/>
    <Route path='/home' element={<Auth><h1>home</h1></Auth>}/>
    <Route path='/*' element={<Notfound/>}/>
   </Routes>;
};