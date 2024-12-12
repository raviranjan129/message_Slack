import { Route, Routes } from 'react-router-dom';

import { SigninCard } from '@/components/organisms/auth/SigninCard';
import { SignupCard } from '@/components/organisms/auth/SignupCard';

// import { Button } from '@/components/ui/button';
import { Auth } from './pages/auth/Auth';


function App() {
  

  return (
   <Routes>
    <Route path='/auth/signup' element={<Auth><SignupCard/></Auth>}/>
    <Route path='/auth/signin' element={<Auth><SigninCard/></Auth>}/>
   </Routes>
  
  );
}

export default App;
