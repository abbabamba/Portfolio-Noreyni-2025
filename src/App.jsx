import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Portfolio from "./pages/portfolio/Portfolio"
import Services from "./pages/services/Services"
import Contact from "./pages/contact/Contact"
import AppLayout from "./components/AppLayout"
import { createBrowserRouter, RouterProvider } from "react-router"


const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        
        {
          path: '/about',
          element: <About />,
        },

        {
          path: '/portfolio',
          element: <Portfolio />,
        },

        {
          path: '/services',
          element: <Services />,
        },

        {
          path: '/contact',
          element: <Contact />,
        },

      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App