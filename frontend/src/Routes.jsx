import { Route, Routes } from 'react-router-dom';

import { Auth } from '@/pages/auth/Auth';
import { Home } from '@/pages/Home/Home';
import { Notfound } from '@/pages/NotFound/Notfound';

import { ProtectedRoute } from './components/molecules/ProtectedRoute/ProtectedRoute';
import { SigninContainer } from './components/organisms/auth/SigninContainer';
import { SignupContainer } from './components/organisms/auth/SignupContainer';



 export const AppRoutes = ()=>{

   return (
    <Routes>
    <Route path='/auth/signup' element={<Auth><SignupContainer/></Auth>}/>
    <Route path='/auth/signin' element={<Auth><SigninContainer/></Auth>}/>
    <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
    <Route path='/*' element={<Notfound/>}/>
   </Routes>
   );
};