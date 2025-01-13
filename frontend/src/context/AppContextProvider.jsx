
import combineContext from '@/utils/CombineContex';

import { AuthContextProvider } from './AuthContext';
import { CreateChannelContextProvider } from './CreateChannelContext';
import { CreateWorksapceContextProvider } from './CreateWorksapceContext';
import { WorkspacePreferencesModalContextProvider } from './WorkspacePreferencesModalContext';

export const AppContextProvider=combineContext(
    AuthContextProvider,
    CreateWorksapceContextProvider,
    WorkspacePreferencesModalContextProvider,
    CreateChannelContextProvider
);