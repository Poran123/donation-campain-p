import ReactDOM from 'react-dom/client'
import './assets/styles/tailwind.config.css'
import './assets/styles/globals.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
