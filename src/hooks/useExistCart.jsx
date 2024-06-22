import { useSelector } from "react-redux"

const useExistCart = (product) => {
    const carts = useSelector(state => state.carts)
    const existCart = carts.cartItems.find(cart => cart.product.name == product.name)
    if (existCart) {
        return true;
    }
    return false;
}

export default useExistCart