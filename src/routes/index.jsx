import App from "@/App";
import Dashboard from "@/pages/admin/dashboard/Dashboard";
import AuthLayout from "@/pages/admin/layout/AuthLayout";
import Login from "@/pages/auth/Login";
import Checkout from "@/pages/checkout/Checkout";
import Home from "@/pages/home/Home";
import Menu from "@/pages/menu/Menu";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route index element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
      <Route path="/dashboard" element={<AuthLayout/>}>
        <Route index element={<Dashboard/>}/>
      </Route>
    </Route>
  )
);

export default router;
