import Admin from "./pages/Admin";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  ITEM_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";
import Basket from "./pages/Basket/Basket";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ItemPage from "./pages/ItemPage";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: SignUp,
  },
  {
    path: ITEM_ROUTE + "/:id",
    Component: ItemPage,
  },
];
