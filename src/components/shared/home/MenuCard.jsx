import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { GiShoppingBag } from "react-icons/gi"
import CartModal from "../modal/CartModal"

const MenuCard = () => {
    return (
        <div className="flex border rounded-lg overflow-hidden">
            <div className="h-full">
                <img src="/images/menu/mojito-thumb.png" className="h-full" alt="" />
            </div>
            <div className="py-2.5 md:py-3 px-3 md:px-4 space-y-2">
                <h1 className="font-semibold text-gray-700">Mojito</h1>
                <p className="text-xs text-gray-500 tracking-wide">Mixed drink of mint, lime, sugar, and club soda.</p>
                <div className="flex justify-between">
                    <h1 className="text-base md:text-xl text-gray-600 font-bold">$2.00</h1>

                    <Dialog>
                        <DialogTrigger>
                            <button className="button text-xs md:text-sm py-0.5">
                                <GiShoppingBag />
                                Add
                            </button>
                        </DialogTrigger>
                        <DialogContent>
                            <CartModal/>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default MenuCard