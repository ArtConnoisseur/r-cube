import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Root } from './routes/root';
import { ErrorPage } from './routes/error-page/error-page'
import { SignUp } from "./routes/sign-up/sign-up";
import { SignIn } from './routes/sign-in/sign-in';
import { Experimentation } from './routes/experimentation/experimentation.jsx';
import { About } from "./routes/about/about.jsx";
import { CourseModules } from "./routes/course-modules/course-modules.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: '/sign-up',
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
    errorElement: <ErrorPage />
  },
  {
    path: '/experimentation',
    element: <Experimentation />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: '/course-modules',
    element: <CourseModules />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);