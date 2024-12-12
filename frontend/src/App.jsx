import { Route, Routes } from 'react-router-dom';

import { Button } from '@/components/ui/button';

import { Auth } from './pages/auth/Auth';


function App() {
  

  return (
   <Routes>
    <Route path='/auth' element={<Auth />}/>
   </Routes>
  
  );
}

export default App;
