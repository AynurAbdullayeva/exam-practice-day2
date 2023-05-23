import MainRoot from "../pages/MainRoot";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Services from "../pages/Services/Services" ;
import Products from "../pages/Products/Products";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import DropDown from "../pages/DropDown/DropDown"

export const ROUTES = [
  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs/>,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/dropdown",
        element: <DropDown/>,
      }

    ]
  }
];
