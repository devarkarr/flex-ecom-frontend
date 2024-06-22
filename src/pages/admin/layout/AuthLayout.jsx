import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import './index.css'

const AuthLayout = () => {
  return (
    <div className="flex lg:gap-2">
      <Sidebar />
      <div className="w-full lg:w-[81%] h-screen bg-[#F7F7FC]">
        <Navbar />
        <div className="px-4 lg:px-5 py-2 lg:py-3">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout