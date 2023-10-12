import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import FeedbackPage from "../Pages/FeedbackPage/FeedbackPage";
import AboutUsPage from "../Pages/AboutUsPage/AboutUsPage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import HomePage from "../Pages/HomePage/HomePage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import { ProtectedRoute } from "./ProtectedRoute";
import AuthProfilePage from "../Pages/Auth/ProfilePage"; //Render this page when logged into a user

const Routes = () => {
  const publicRoutes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "about", element: <AboutUsPage /> },
        { path: "feedback", element: <FeedbackPage /> },
        { path: "search", element: <SearchPage /> },
        { path: "profile", element: <ProfilePage /> },
      ]
    },
  ];

  const unauthenticatedRoutes = [
    {
      path: "/login",
      element: <HomePage />,
    },
    {
      path: "/register",
      element: <HomePage />,
    },
  ];

  const authenticatedRoutes = [
    {
      path: "/app",
      element: <ProtectedRoute />,
      children: [
        {
          path: "profile",
          element: <AuthProfilePage />,
        },
        {
          path: "logout",
          element: <div>Logout</div>,
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    ...publicRoutes,
    ...unauthenticatedRoutes,
    ...authenticatedRoutes,
  ]);

  return <RouterProvider router={router} />;
};

export { Routes };

// export const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App />,
//       children: [
//         {path: "", element: <HomePage />},
//         {path: "about", element: <AboutUsPage />},
//         {path: "feedback", element: <FeedbackPage />},
//         {path: "search", element: <SearchPage />},
//         {path: "profile", element: <ProfilePage />},
//       ]
//     },
//   ]);
