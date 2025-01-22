
import combineContext from '@/utils/CombineContex';

import { AuthContextProvider } from './AuthContext';
import { CreateChannelContextProvider } from './CreateChannelContext';
import { CreateWorksapceContextProvider } from './CreateWorksapceContext';
import { WorkspaceContextProvider } from './WorkspaceContext';
import { WorkspacePreferencesModalContextProvider } from './WorkspacePreferencesModalContext';

export const AppContextProvider=combineContext(
    AuthContextProvider,
    WorkspaceContextProvider,
    CreateWorksapceContextProvider,
    WorkspacePreferencesModalContextProvider,
    CreateChannelContextProvider
);