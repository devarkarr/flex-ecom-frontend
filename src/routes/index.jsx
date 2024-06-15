import App from "@/App";
import Login from "@/pages/auth/Login";
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
        <Route path="/login" element={<Login/>}/>
      </Route>
    </Route>
  )
);

export default router;
