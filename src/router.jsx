import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Dishes from "@/pages/Dishes";
import Dish from "@/pages/Dish";
import Cart from "@/pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/dishes",
    element: <Dishes />,
  },
  {
    path: "/dishes/:id",
    element: <Dish />,
  },
  {
    path: "/cart",
    element: <Cart />,
  }
]);

export default router;
