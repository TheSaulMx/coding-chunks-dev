import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import Home from "../components/home/home";
import About from "../components/about/about";

let routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: (<p>Error, the route dont exist</p>),
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
  ])


export default routes;