import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routers';
import { ToastContainer } from "react-toastify"

function App() {

  return <>
    <RouterProvider router={routers} />
    <ToastContainer position="top-right" autoClose={3000} />
  </>
}

export default App
