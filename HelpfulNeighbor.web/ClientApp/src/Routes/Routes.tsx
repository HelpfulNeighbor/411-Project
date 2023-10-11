import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FeedbackPage from "../Pages/FeedbackPage/FeedbackPage";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import HomePage from "../Pages/HomePage/HomePage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
//import AuthProfilePage from './Pages/Auth/ProfilePage'; //Render this page when logged into a user

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {path: "", element: <HomePage />},
        {path: "about", element: <AboutUsPage />},
        {path: "feedback", element: <FeedbackPage />},
        {path: "search", element: <SearchPage />},
        {path: "profile", element: <ProfilePage />},
      ]
    },
  ]);