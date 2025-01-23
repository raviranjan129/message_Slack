import { Route, Routes } from 'react-router-dom';

import { Auth } from '@/pages/auth/Auth';
import { Home } from '@/pages/Home/Home';
import { Notfound } from '@/pages/NotFound/Notfound';

import { ProtectedRoute } from './components/molecules/ProtectedRoute/ProtectedRoute';
import { SigninContainer } from './components/organisms/auth/SigninContainer';
import { SignupContainer } from './components/organisms/auth/SignupContainer';
import { JoinPage } from './pages/Workspace/JoinPage';
import { WorkspaceLayout } from './pages/Workspace/Layout';



 export const AppRoutes = ()=>{

   return (
    <Routes>
    <Route path='/auth/signup' element={<Auth><SignupContainer/></Auth>}/>
    <Route path='/auth/signin' element={<Auth><SigninContainer/></Auth>}/>
    <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
    <Route path="/workspaces/:workspaceId" element={<ProtectedRoute><WorkspaceLayout/></ProtectedRoute>} />
    <Route  path='/workspaces/:workspaceId/channels/:channelId'
    element={<ProtectedRoute>Channel</ProtectedRoute>}
    />
    <Route  path='/workspaces/join/:workspaceId' element={<JoinPage/>} />
    <Route path='/*' element={<Notfound/>}/>
   </Routes>
   );
};