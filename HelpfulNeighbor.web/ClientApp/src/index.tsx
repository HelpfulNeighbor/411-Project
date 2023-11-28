import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Routes } from "./Routes/Routes";
import AuthProvider from "./Authentication/AuthProvider";
import { ChakraProvider } from "@chakra-ui/react";

// importing themes
import {extendTheme} from '@chakra-ui/react'
import '@fontsource/bigshot-one/400.css'
import '@fontsource/aleo/700.css'
import '@fontsource/urbanist/400.css';
import '@fontsource/source-serif-4/400.css';

const theme = extendTheme({
  fonts: {
    heading: `'Aleo', sans-serif`,
    body: `'Source Serif 4', sans-serif`,
  },
  colors: {
    light:{
      primary: "#6B46C1", // Adjust as needed
      secondary: "#90edb3", // Adjust as needed
      tertiary: "#FEFCBF", // Adjust as needed
      background: "#E9D8FD", // Adjust as needed
      text: "#1A202C", // Adjust as needed
    },
    dark: {
      background: "#1A202C",
      text: "#FFFFFF",
      primary: "#6B46C1",
      // Add more colors as needed
    },
  }
})

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider theme={theme}>
      <Routes />
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
