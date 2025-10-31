import { createBrowserRouter } from "react-router";

import { reposLoaders } from "../loaders/reposLoader.ts";

import Repos from "../pages/Repos.tsx";
import App from "../App.tsx";
import Home from "../pages/Home.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Algo deu Errado</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/repos/:login",
        element: <Repos />,
        loader: reposLoaders,
      },
    ],
  },
]);
