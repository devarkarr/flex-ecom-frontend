import { addToCart } from "@/features/cart/cartSlice"
import useExistCart from "@/hooks/useExistCart"
import { currencyFormat } from "@/lib/utils"
import { useEffect, useState } from "react"
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci"
import { useDispatch } from "react-redux"

const CartModal = () => {
    const dispatch = useDispatch()

    const [qty, setQty] = useState(1)

    const product = {
        name: 'BBQ Pulled Pork',
        description: "Sweet and tangy BBQ Pork sandwiches made with juicy",
        price: '4.50'
    }

    const existCart = useExistCart(product)

    const increaseQty = () => {
        setQty(value => value + 1)
    }

    const decreaseQty = () => {
        if (qty > 1) {
            setQty(value => value - 1)
        }
    }

    const addCart = () => {
        dispatch(addToCart({ product, qty }))
    }
    return (
        <>
            <div className="flex gap-3">
                <div>
                    <img src="/images/menu/szechuan_beef-cover.png" className="w-20 h-20 rounded-lg" alt="" />
                </div>
                <div className="space-y-1.5">
                    <h5 className=" text-sm font-bold text-gray-700">BBQ Pulled Pork</h5>
                    <p className="text-xs text-gray-500 tracking-tight ">{product.description}</p>
                    <h1 className="text-base text-gray-600 md:text-xl font-semibold">{currencyFormat(product.price)}</h1>
                </div>
            </div>
            <div className="flex gap-3 select-none">
                <h1>Quantity:</h1>
                <div className="flex items-center gap-2">
                    <CiCircleMinus size={25} className={`${qty == 1 ? 'text-body/50' : 'text-body'}  cursor-pointer`} onClick={decreaseQty} />
                    <h1 className="text-semibold text-gray-600 md:text-lg">{qty}</h1>
                    <CiCirclePlus size={25} className="text-body cursor-pointer" onClick={increaseQty} />
                </div>
            </div>

            <div className="text-center select-none">
                {
                    existCart ? 
                    <button  className="button cursor-not-allowed hover:bg-body/50 bg-body/50 text-white w-full py-1.5 flex justify-center">Added</button>
                    :
                        <button onClick={addCart} className="button hover:bg-body/70 bg-body text-white w-full py-1.5 flex justify-center">Add to Cart</button>
                }
            </div>
        </>
    )
}

export default CartModal