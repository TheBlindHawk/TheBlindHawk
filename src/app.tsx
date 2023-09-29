import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { AppRoutes } from './router'
import { NavProvider } from './components/navigation'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <NavProvider>
        <AppRoutes />
      </NavProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
