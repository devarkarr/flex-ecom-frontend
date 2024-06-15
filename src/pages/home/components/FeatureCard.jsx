import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { GiShoppingBag } from "react-icons/gi"
import { CiCircleMinus,CiCirclePlus } from "react-icons/ci";

const FeatureCard = () => {
  return (
    <div className="space-y-2.5 shadow rounded-2xl overflow-hidden">
      <img src="/images/menu/szechuan_beef-cover.png" className="w-full" alt="" />
      <div className="space-y-2.5 px-3 pb-3.5">
        <h5 className=" text-sm font-bold text-gray-700">BBQ Pulled Pork</h5>
        <p className="text-xs text-gray-500 tracking-tight ">Sweet and tangy BBQ Pork sandwiches made with juicy...
        </p>
        <div className="mt-3 flex justify-between">
          <h1 className="text-base text-gray-600 md:text-xl font-semibold">$4.50</h1>
          <Dialog>
            <DialogTrigger>
              <button className="button  text-xs md:text-sm py-0.5">
                <GiShoppingBag />
                Add
              </button>
            </DialogTrigger>
            <DialogContent>
              <div className="flex gap-3">
                <div>
                  <img src="/public/images/menu/szechuan_beef-cover.png" className="w-20 h-20 rounded-lg" alt="" />
                </div>
                <div className="space-y-1.5">
                  <h5 className=" text-sm font-bold text-gray-700">BBQ Pulled Pork</h5>
                  <p className="text-xs text-gray-500 tracking-tight ">Sweet and tangy BBQ Pork sandwiches made with juicy...
                  </p>
                  <h1 className="text-base text-gray-600 md:text-xl font-semibold">$4.50</h1>
                </div>
              </div>
              <div className="flex gap-3">
                <h1>Quantity:</h1>
                <div className="flex items-center gap-2">
                  <CiCircleMinus size={25} className="text-body"/>
                  <h1 className="text-semibold text-gray-600 md:text-lg">1</h1>
                  <CiCirclePlus size={25} className="text-body"/>
                </div>
              </div>

              <div className="text-center">
                <button className="button bg-body text-white w-full py-1.5 flex justify-center">Add to Cart</button>
              </div>

            </DialogContent>
          </Dialog>

        </div>
      </div>
    </div>
  )
}

export default FeatureCard