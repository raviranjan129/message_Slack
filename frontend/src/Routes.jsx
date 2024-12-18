import { Route, Routes } from 'react-router-dom';

import { SigninContainer } from '@/components/organisms/auth/SigninContainer';
import { SignupContainer } from '@/components/organisms/auth/SignupContainer';
import { Auth } from '@/pages/auth/Auth';
import { Notfound } from '@/pages/NotFound/Notfound';

import { ProctedRoute } from './components/molecules/ProtectedRoute/ProtectedRoute';


 export const AppRoutes = ()=>{

    <Routes>
    <Route path='/auth/signup' element={<Auth><SignupContainer/></Auth>}/>
    <Route path='/auth/signin' element={<Auth><SigninContainer/></Auth>}/>
    <Route path='/home' element={<ProctedRoute><Auth><h1>home</h1></Auth></ProctedRoute>}/>
    <Route path='/*' element={<Notfound/>}/>
   </Routes>;
};