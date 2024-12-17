
import combineContext from '@/utils/CombineContex';

import { AuthContextProvider } from './AuthContext';

export const AppContextProvider=combineContext(
    AuthContextProvider
);