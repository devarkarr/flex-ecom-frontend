import { GiShoppingBag } from "react-icons/gi"

const MenuCard = () => {
    return (
        <div className="flex border rounded-lg overflow-hidden">
            <div className="h-full">
                <img src="/src/assets/images/menu/mojito-thumb.png" className="h-full" alt="" />
            </div>
            <div className="py-2.5 md:py-3 px-3 md:px-4 space-y-2">
                <h1 className="font-semibold text-gray-700">Mojito</h1>
                <p className="text-xs text-gray-500 tracking-wide">Mixed drink of mint, lime, sugar, and club soda.</p>
                <div className="flex justify-between">
                    <h1 className="text-base md:text-xl text-gray-600 font-bold">$2.00</h1>
                    <button className="button text-xs md:text-sm py-0.5">
                        <GiShoppingBag />
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MenuCard