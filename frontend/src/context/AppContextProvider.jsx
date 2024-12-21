
import combineContext from '@/utils/CombineContex';

import { AuthContextProvider } from './AuthContext';
import { CreateWorksapceContextProvider } from './CreateWorksapceContext';

export const AppContextProvider=combineContext(
    AuthContextProvider,
    CreateWorksapceContextProvider
);