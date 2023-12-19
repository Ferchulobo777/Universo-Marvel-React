import { createBrowserRouter } from "react-router-dom";
import UniversoMarvel from "../views/UniversoMarvel";
import Home from "../views/Home";
import ProtectedRoute from "../components/ProtectedRoute";
import CharacterDetail from "../views/CharacterDetail";
import SignUp from "../views/SignUp";
import MarvelLayout from "../components/MarvelLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: (
      <MarvelLayout>
        <SignUp />
      </MarvelLayout>
    ),
  },
  {
    path: "/characters",
    element: (
      <MarvelLayout>
        <ProtectedRoute>
          <UniversoMarvel />
        </ProtectedRoute>
      </MarvelLayout>
    ),
    children: [
      {
        path: ":id",
        element: <CharacterDetail />,
      },
      {
        path: "",
        element: <UniversoMarvel />,
      },
    ],
  },
]);
