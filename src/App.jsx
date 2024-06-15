import { Outlet } from "react-router-dom"
import Navbar from "./components/shared/home/Navbar"
import Footer from "./components/shared/home/Footer"
import MobileNavbar from "./components/shared/home/MobileNavbar"

const App = () => {
  return (
    <div className="relative">
      <Navbar/>
      <div className="px-3 md:px-24 lg:px-32">
      <Outlet/>
      </div>
      <Footer/>
      {/* moblie */}
      <MobileNavbar/>
    </div>
  )
}

export default App