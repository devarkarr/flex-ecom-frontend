import { FaClipboardList, FaUserFriends } from "react-icons/fa";
import { MdStickyNote2 } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";


const Dashboard = () => {
  return (
    <div>
      <div className="space-y-1">
        <h1 className="text-[1.8rem] text-body font-bold">Good Morning!</h1>
        <h3 className="text-[1.3rem] font-semibold text-gray-800">Flex Cool</h3>
      </div>
      <div className="my-6">
        <h1 className="text-gray-800 text-[1.32rem] font-bold">Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 my-4 gap-5 md:gap-6">
          <div className="p-4 bg-body rounded-lg flex items-center gap-4 text-white">
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
              <RiMoneyDollarCircleFill size={27} className="text-body" />
            </div>
            <h1 className="text-lg font-semibold">Total Sales</h1>
          </div>

          <div className="p-4 bg-[#8262FE] rounded-lg flex items-center gap-4 text-white">
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
              <FaClipboardList size={27} className="text-[#8262FE]" />
            </div>
            <h1 className="text-lg font-semibold">Total Orders</h1>
          </div>

          <div className="p-4 bg-[#FF4F99] rounded-lg flex items-center gap-4 text-white">
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
              <FaUserFriends size={27} className="text-[#FF4F99]" />
            </div>
            <h1 className="text-lg font-semibold">Total Customers</h1>
          </div>

          <div className="p-4 bg-[#A953FF] rounded-lg flex items-center gap-4 text-white">
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
              <MdStickyNote2 size={27} className="text-[#A953FF]" />
            </div>
            <h1 className="text-lg font-semibold">Total Items</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard