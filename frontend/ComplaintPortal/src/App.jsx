import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'

import AppRoutes from './routes/AppRoutes.jsx'
import Toast from './components/Common/Toast.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ToastProvider>
            <AppRoutes />
            <Toast />
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
