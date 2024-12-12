import { Route, Routes } from 'react-router-dom';

import { SigninCard } from '@/components/organisms/auth/SigninCard';
import { SignupCard } from '@/components/organisms/auth/SignupCard';
// import { Button } from '@/components/ui/button';
import { Auth } from '@/pages/auth/Auth';
import { Notfound } from '@/pages/NotFound/Notfound';


function App() {
  

  return (
   <Routes>
    <Route path='/auth/signup' element={<Auth><SignupCard/></Auth>}/>
    <Route path='/auth/signin' element={<Auth><SigninCard/></Auth>}/>
    <Route path='/*' element={<Notfound/>}/>
   </Routes>
  
  );
}

export default App;
