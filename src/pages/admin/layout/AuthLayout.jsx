import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

const AuthLayout = () => {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="w-[81%] h-screen bg-[#F7F7FC]">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout