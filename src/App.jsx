import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Layout from "./components/Layout";
import Products from "./routes/Products";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      index: true,
      element: <Home />,
    }]
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/contact",
    element: <Contact />
  },
]);

const App = () => {
  return (

    <RouterProvider router={router} />

  )
}

export default App;