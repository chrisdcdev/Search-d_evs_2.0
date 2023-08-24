import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '@fontsource/nunito/400.css'
import '@fontsource/open-sans/700.css'
import theme from './fonts/theme.ts'
import Profile from './pages/Profile.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
  },
  {
    path: "/profile/:user",
    element: <div><Profile /></div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
)
