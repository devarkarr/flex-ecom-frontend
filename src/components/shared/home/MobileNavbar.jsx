import { IoMdHome } from "react-icons/io";
import { FaRegRectangleList } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import TotalCartModal from "../modal/TotalCartModal";


const MobileNavbar = () => {
    return (
        <ul className="fixed mobile-cart-navbar lg:hidden flex border justify-between bottom-0  w-full z-50 px-5 py-2 rounded-tl-2xl rounded-tr-2xl  bg-white">
            <li>
                <NavLink to="/" className="flex flex-col justify-center items-center ">
                    <IoMdHome size={20} />
                    <span className="text-xs ">Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/menu" className="flex flex-col justify-center items-center text-gray-500">
                    <FaRegRectangleList size={20} />
                    <span className="text-xs ">Menu</span>
                </NavLink>
            </li>
            <li className=" -translate-y-7      text-white">
                {/* cart drawer */}

                <Sheet>
                    <SheetTrigger>
                        <div className="shadow-body flex flex-col shadow bg-body w-12 h-12 justify-center items-center rounded-full">
                            <GiShoppingBag size={20} />
                        </div>
                    </SheetTrigger>
                    <SheetContent>
                        <TotalCartModal/>
                    </SheetContent>
                </Sheet>

            </li>
            <li className="flex flex-col justify-center items-center text-gray-500">
                <FaClipboardList size={20} />
                <span className="text-xs ">Orders</span>
            </li>
            <li className="flex flex-col justify-center items-center text-gray-500">
                <FaUserCircle size={20} />
                <span className="text-xs ">Log In</span>
            </li>
        </ul>
    )
}

export default MobileNavbar