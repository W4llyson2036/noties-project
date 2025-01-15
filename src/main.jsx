// lib
import React                                from 'react';
import ReactDOM                             from 'react-dom/client';
import { QueryClient }                      from '@tanstack/react-query';

import { PersistQueryClientProvider }       from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister }       from '@tanstack/query-sync-storage-persister'
import { ReactQueryDevtools }               from '@tanstack/react-query-devtools'

// routes
import { RouterProvider }                   from 'react-router-dom';
import { routes }                           from './Route/Route';

// CSS
import './index.css';
import './style/reset.css';

const client = new QueryClient({
    defaultOptions: {
        queries: {
            //back here to set up
        }
    }
});

const persister = createSyncStoragePersister({
    storage: window.localStorage,
})   

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <PersistQueryClientProvider 
            client={client} 
            persistOptions={{persister}}
        >
            <RouterProvider router={routes} /> 
            <ReactQueryDevtools initialIsOpen={false} />
        </PersistQueryClientProvider>
//   </React.StrictMode> 
)