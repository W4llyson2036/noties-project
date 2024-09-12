// lib
import React                                from 'react';
import ReactDOM                             from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "react-query";

// routes
import { RouterProvider }                   from 'react-router-dom';
import { routes }                           from './Route/Route';

// CSS
import './index.css';
import './style/reset.css';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <RouterProvider router={routes} /> 
        </QueryClientProvider>
  </React.StrictMode>
)