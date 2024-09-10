import React              from 'react'
import ReactDOM           from 'react-dom/client'

// routes
import { RouterProvider } from 'react-router-dom'
import { routes }         from './Route/Route'

// CSS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={routes}> 
    </RouterProvider>
  </React.StrictMode>
)