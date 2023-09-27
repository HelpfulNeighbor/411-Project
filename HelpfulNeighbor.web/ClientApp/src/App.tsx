import React from 'react';
import './App.css';

// importing react-router-dom stuff
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// importing 'ChakraProvider' component
import { ChakraProvider } from '@chakra-ui/react';

// importing TEMPORARY layouts and pages for mockup purposes
// import RootLayout from './Layouts/RootLayout'
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import FeedbackPage from './Pages/FeedbackPage';
import SearchPage from './Pages/SearchPage';

// importing themes
import {extendTheme} from '@chakra-ui/react'
import '@fontsource/bigshot-one/400.css'
import '@fontsource/aleo/700.css'
import '@fontsource/urbanist/400.css';
import '@fontsource/source-serif-4/400.css';

// making temporary router and routes (Find the individual pages by doing /the name of the page .. in the url)
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<HomePage />} />
//       <Route path="feedback" element={<FeedbackPage />} />
//       <Route path="about" element={<AboutUsPage />} />
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/feedback",
    element: <FeedbackPage />,
  },
  {
    path: "/about",
    element: <AboutUsPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
]);

const theme = extendTheme({
  fonts: {
    heading: `'Aleo', sans-serif`,
    body: `'Source Serif 4', sans-serif`,
  },
})

function App() {
  // 2. Wrapping ChakraProvider at the root of the application
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
      </ChakraProvider>
  );
}

export default App;