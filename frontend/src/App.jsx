import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';

import { SigninCard } from '@/components/organisms/auth/SigninCard';
// import { Button } from '@/components/ui/button';
import { Auth } from '@/pages/auth/Auth';
import { Notfound } from '@/pages/NotFound/Notfound';

import { SignupContainer } from './components/organisms/auth/SignupContainer';


function App() {
  
  const queryClient=new QueryClient();

  return (
  <QueryClientProvider client={queryClient} >
     <Routes>
    <Route path='/auth/signup' element={<Auth><SignupContainer/></Auth>}/>
    <Route path='/auth/signin' element={<Auth><SigninCard/></Auth>}/>
    <Route path='/*' element={<Notfound/>}/>
   </Routes>
  </QueryClientProvider>
  
  );
}

export default App;
