import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.jsx';
import { UserProvider } from './context/UserContext.jsx';
import { DarkModeProvider } from './context/DarkModeContext.jsx';
import theme from './styles/theme.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}> 
      <UserProvider>
        <DarkModeProvider> 
          <RouterProvider router={router} />
        </DarkModeProvider>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);