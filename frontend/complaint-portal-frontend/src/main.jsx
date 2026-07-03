import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from "react-hot-toast";
import { SidebarProvider } from "./context/SidebarContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <SidebarProvider>

    <App />

</SidebarProvider>

    <Toaster
        position="top-right"
    />

</StrictMode>
)
