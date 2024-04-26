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
import { About } from "./routes/about/about.jsx";
import { CourseModules } from "./routes/course-modules/course-modules.jsx";
import { Module } from "./routes/module/module.jsx";
import { Quiz } from './routes/quiz/quiz.jsx';
import { Feedback } from "./routes/feedback/feedback.jsx";

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
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: '/course-modules',
    element: <CourseModules />,
    errorElement: <ErrorPage />
  }, 
  {
    path: '/module/:moduleNo',
    element: <Module />,
    errorElement: <ErrorPage />,
    loader: ({params}) => params.moduleNo
  },
  {
    path: '/quiz',
    element: <Quiz />,
    errorElement: <ErrorPage />
  },
  {
    path: '/feedback',
    element: <Feedback />,
    errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);