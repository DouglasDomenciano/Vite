import React from 'react'
import {
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Routes from './routes'

const router = createBrowserRouter([...Routes]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider
            router={router}
        />
  </React.StrictMode>,
)
