import { LuLayoutDashboard } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { GiNotebook, GiShoppingBag, GiTempleGate } from "react-icons/gi";
import { MdOutlineStickyNote2 } from "react-icons/md";


const sidebarLinks = (<ul className="my-5 px-3 pe-2 sidebar-link-group">
  <li>
    <NavLink to="/dashboard" className="sidebar-link">
      <LuLayoutDashboard size={20} />
      <h4>Dashboard</h4>
    </NavLink>
  </li>
  <li>
    <NavLink to="/items" className="sidebar-link">
      <GiTempleGate size={20} />
      <h4>Items</h4>
    </NavLink>
  </li>
  <li className="text-sm uppercase text-gray-400 py-1">
    <span>POS & Orders</span>
  </li>
  <li>
    <NavLink to="/items" className="sidebar-link">
      <MdOutlineStickyNote2 size={20} />
      <h4>POS</h4>
    </NavLink>
  </li>
  <li>
    <NavLink to="/items" className="sidebar-link">
      <GiNotebook size={20} />
      <h4>POS Orders</h4>
    </NavLink>
  </li>
  <li>
    <NavLink to="/items" className="sidebar-link">
      <GiShoppingBag size={20} />
      <h4>Online Orders</h4>
    </NavLink>
  </li>
</ul>)

const Sidebar = () => {
  return (
    <nav className="w-0 lg:w-[19%]">
      <div>
        <img src="/images/flexpos.png" alt="logo" className="w-48" />
      </div>
      {
        sidebarLinks
      }
    </nav>
  )
}

export default Sidebar