import React from "react";
import ReactDOM from "react-dom/client";
import {
  Card,
  About,
  Home,
  Skills,
  Educations,
  Projects,
  Specializations,
  Contact,
  ProjectLandingPage,
} from "./components/index";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/skills" element={<Skills />} />
//       <Route path="/educations" element={<Educations />} />
//       <Route path="/projects" element={<Projects />} />
//       {/* <Route path="/project-landing-page" element={<ProjectLandingPage />} /> */}
//       <Route path="/specializations" element={<Specializations />} />
//       <Route path="/contact" element={<Contact />} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/educations",
        element: <Educations />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/specializations",
        element: <Specializations />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/project-landing-page",
    element: <ProjectLandingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
