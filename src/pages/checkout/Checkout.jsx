import { TbArrowBackUp } from "react-icons/tb";
import { IoAddCircle } from "react-icons/io5";
import { RiEdit2Fill } from "react-icons/ri";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { Link } from "react-router-dom";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddAddress from "@/components/shared/modal/AddAddress";
import { useSelector } from "react-redux";
import { currencyFormat } from "@/lib/utils";


const Address = () => {
    return (
        <div className="w-full md:w-[60%] lg:w-[70%] p-5 shadow-lg rounded-lg">
            <div className="flex justify-between">
                <h1 className="text-lg font-bold">Delivery Address</h1>
                <div className="flex gap-2">
                    <button className="button bg-body/20 shadow-sm text-xs md:text-sm">
                        <RiEdit2Fill size={18} />
                        <span>Edit</span>
                    </button>
                    <Dialog>
                        <DialogTrigger asChild>
                            <button className="button text-xs shadow-sm bg-gray-100/50 md:text-sm">
                                <IoAddCircle size={18} />
                                <span>Add</span>
                            </button>
                        </DialogTrigger>
                        <AddAddress />
                    </Dialog>
                </div>
            </div>
            <div className="flex mt-4">
                <div className="border p-3 px-4 rounded-lg border-body/70">
                    <div className="flex mb-2 items-center justify-between">
                        <h5 className="text-body lg:text-sm text-xs font-bold">Home</h5>
                        <MdOutlineRadioButtonChecked className="text-body" />
                    </div>
                    <p className="text-xs font-semibold">
                        335, Gulshan 2, Dhaka Bangladesh
                    </p>
                </div>
            </div>
            <div className="mt-5">
                <h1 className="text-lg font-bold">Preferred Time Frame For Delivery</h1>
            </div>
        </div>
    )
}

const Cart = ({ cart }) => {
    const { product } = cart
    return (
        <li>
            <div className="flex gap-3 items-center">
                <img src="https://demo.foodappi.xyz/storage/60/conversions/kung_pao_chicken-thumb.png" className="w-16 h-16 rounded-lg" alt="" />
                <div className="space-y-1.5">
                    <h3 className="font-bold">{product.name}</h3>
                    <h4 className="text-gray-500 text-xs">{product.description.slice(0, 30) + '...'}</h4>
                    <h2 className="text-sm font-bold">{currencyFormat(product.price)}</h2>
                </div>
            </div>
        </li>
    )
}

const CartSummary = () => {
    const carts = useSelector(state => state.carts)
    return (
        <div className="w-full md:w-[40%] lg:w-[30%] p-5 shadow-lg rounded-lg">
            <h1 className="text-lg font-bold text-center">Cart Summary
            </h1>
            <ul className="mt-6 md:mt-7 border-b pb-3">
                {
                    carts.cartItems?.map((cart, i) => (
                        <Cart key={i} cart={cart} />
                    ))
                }

            </ul>
            <div className="p-4 w-full border-gray-200/80 mt-3 border rounded-lg">
                <ul className="space-y-3">
                    <li className="flex justify-between items-center text-sm">
                        <h4>Subtotal</h4>
                        <h4>{currencyFormat(carts.itemsPrice)}</h4>
                    </li>
                    <li className="flex justify-between items-center text-sm">
                        <h4>Delivery Charge</h4>
                        <h4>{currencyFormat(carts.deliveryCharge)}</h4>
                    </li>
                    <li className="flex justify-between items-center text-sm ">
                        <h4 className="font-bold">Total</h4>
                        <h4 className="font-bold">{currencyFormat(carts.totalPrice)}</h4>
                    </li>
                </ul>
            </div>
            <div className="mt-6">
                <button className="py-2 px-7 w-full font-bold bg-body text-white rounded-full">Proceed To Paypal</button>
            </div>
        </div>
    )
}


const Checkout = () => {
    return (
        <div className="mb-6 md:mb-10">
            <Link to="/" className="flex space-x-2 items-center text-body font-bold text-sm 2xl:text-base mt-10 mb-7 md:my-10 ">
                <TbArrowBackUp size={20} />
                <h5>Back to Home</h5>
            </Link>
            <div className="flex flex-col md:flex-row gap-5 justify-between">
                <Address />
                <CartSummary />
            </div>
        </div>
    )
}



export default Checkout