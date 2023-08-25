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
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
  },
  {
    path: "/profile",
    element: <div><Profile /></div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <React.StrictMode>
        <ChakraProvider theme={theme} >
          <RouterProvider router={router} />
        </ChakraProvider>
      </React.StrictMode>,
    </Provider>
  </QueryClientProvider>
)
