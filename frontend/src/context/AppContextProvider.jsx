
import combineContext from '@/utils/CombineContex';

import { AuthContextProvider } from './AuthContext';
import { ChannelMessagesProvider } from './ChannelMessages';
import { CreateChannelContextProvider } from './CreateChannelContext';
import { CreateWorksapceContextProvider } from './CreateWorksapceContext';
import { SocketContextProvider } from './SocketContext';
import { WorkspaceContextProvider } from './WorkspaceContext';
import { WorkspacePreferencesModalContextProvider } from './WorkspacePreferencesModalContext';

export const AppContextProvider=combineContext(
    ChannelMessagesProvider,
    SocketContextProvider,
    AuthContextProvider,
    
    WorkspaceContextProvider,
    CreateWorksapceContextProvider,
    WorkspacePreferencesModalContextProvider,
    CreateChannelContextProvider
);