import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material'


// Pages and Assets
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import PersyaratanBerkas from './pages/PersyaratanBerkas.jsx'
import NotFound from './pages/exceptions/404.jsx'
import './index.css'

// Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route exact path='/' element={<App />}>
    <Route path='/' element={<Home />} />
    <Route path='/persyaratan-berkas' element={<PersyaratanBerkas />} />
    <Route path='/about' element={<About />} />
    <Route path='*' element={<NotFound />} />
  </Route>
))

// MUI Default Theme
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  typography: {
    "fontFamily": `"Inter", sans-serif`,
  },
  palette: {
    mainGreen: createColor('#059669'),
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} fallbackElement={<h1>Loading..</h1>} />
    </ThemeProvider>
  </React.StrictMode>
)
