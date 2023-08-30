import React from 'react';
import './App.css';

// importing react-router-dom stuff
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// importing 'ChakraProvider' component
import { ChakraProvider } from '@chakra-ui/react';

// importing TEMPORARY layouts and pages for mockup purposes
import RootLayout from './Layouts/RootLayout'
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import FeedbackPage from './Pages/FeedbackPage';

// making temporary router and routes (Find the individual pages by doing /the name of the page .. in the url)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="feedback" element={<FeedbackPage />} />
      <Route path="about" element={<AboutUsPage />} />
    </Route>
  )
)
function App() {
  // 2. Wrapping ChakraProvider at the root of the application
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
      </ChakraProvider>
  );
}

export default App;