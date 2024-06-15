import App from "@/App";
import Home from "@/pages/home/Home";
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
      </Route>
    </Route>
  )
);

export default router;
