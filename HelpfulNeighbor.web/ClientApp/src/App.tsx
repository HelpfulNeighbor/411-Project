import "./App.css";

import { Outlet } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";
import "@fontsource/bigshot-one/400.css";
import "@fontsource/aleo/700.css";
import "@fontsource/urbanist/400.css";
import "@fontsource/source-serif-4/400.css";
import ProfilePage from './Pages/ProfilePage'; 
//import AuthProfilePage from './Pages/Auth/ProfilePage'; //Render this page when logged into a user
import SearchPage from './Pages/SearchPage';
import FeedbackPage from './Pages/FeedbackPage';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
// import RootLayout from './Layouts/RootLayout'
// importing TEMPORARY layouts and pages for mockup purposes

const theme = extendTheme({
  fonts: {
    heading: `'Aleo', sans-serif`,
    body: `'Source Serif 4', sans-serif`,
  },
});

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
    </>
  );
}

export default App;
