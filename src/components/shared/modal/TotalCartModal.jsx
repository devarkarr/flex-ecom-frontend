import { currencyFormat } from "@/lib/utils"
import { useSelector } from "react-redux"
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
    const { product, qty } = cart
    return (
        <li>
            <div className="flex justify-between gap-3 items-center w-full">
                <div>
                    <img src="/images/menu/szechuan_beef-cover.png" className="w-16 h-16 rounded-lg" alt="" />
                </div>
                <div className="space-y-0.5 flex-1">
                    <h2 className="font-bold text-sm">{product.name}</h2>
                    <h5 className="text-sm text-gray-500">{product.description.slice(0, 10) + '..'}</h5>
                    <div className="flex justify-between">
                        <h3 className="font-bold text-sm">{currencyFormat(product.price)}</h3>
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className="h-5 w-5 flex items-center justify-center rounded-full border border-red-500">
                                <FaRegTrashAlt size={12} className="text-red-500 cursor-pointer " />
                            </div>
                            <h1 className="text-sm font-bold">{qty}</h1>
                            <div className="h-5 w-5 flex items-center justify-center rounded-full border border-body">
                                <FaPlus size={15} className="text-body cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
const TotalCartModal = () => {
    const carts = useSelector(state => state.carts)
    return (
        <div className=" relative h-full">
            <div className="mt-6 h-full">
                <h1 className=" font-bold text-lg md:text-[1.4rem] text-center">My Cart</h1>
                {
                    carts.cartItems.length ?
                        <ul className=" my-10 md:my-16 space-y-5 overflow-y-auto h-full">
                            {
                                carts.cartItems.map((cart, i) => (
                                    <Cart key={i} cart={cart} />
                                ))
                            }
                        </ul> :
                        <div className="flex flex-col items-center justify-center my-10 md:my-16">
                            <img src="/images/cart/empty-cart .gif" className=" w-40" alt="" />
                            <p className="text-sm text-gray-400 mt-7 px-12 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                }
            </div>
            {
                carts.cartItems.length && (
                    <div className=" absolute w-full bottom-0 bg-white py-3 mb-3">
                        <div className="flex justify-between py-1.5 lg:py-2 px-3 border rounded-xl">
                            <h1 className="font-bold">Subtotal</h1>
                            <h1 className="text-body font-bold">{currencyFormat(carts.totalPrice)}</h1>
                        </div>
                        <div className="w-full mt-3 flex">
                            <Link to='/checkout' className="bg-body text-center text-white py-1.5 lg:py-2 font-bold px-4 w-full  rounded-full">Procced To Checkout</Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default TotalCartModal