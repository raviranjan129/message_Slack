import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Modals } from '@/components/organisms/Modals/Modals';
import { Toaster } from '@/components/ui/toaster';
import { AppRoutes } from '@/Routes';

import { AppContextProvider } from './context/AppContextProvider';


function App() {
  
  const queryClient=new QueryClient();

  return (
  <QueryClientProvider client={queryClient} >
    <AppContextProvider>
    

   <AppRoutes/>
<Modals/>

   </AppContextProvider>
   <Toaster/>
  </QueryClientProvider>
  
  );
}

export default App;
