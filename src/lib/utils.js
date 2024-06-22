import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const changeDecimal = (price) => {
  return (Math.round(price * 100) / 100).toFixed(2);
};

export const cartUpdate = (state) => {
  state.itemsPrice = changeDecimal(
    state.cartItems.reduce((pre, cur) => pre + cur.product.price * cur.qty, 0)
  );
  state.deliveryCharge = changeDecimal(Number(state.itemsPrice + 0));
  state.totalPrice = (
    Number(state.itemsPrice) + Number(state.deliveryCharge)
  ).toFixed(2);
  return state;
};

export const currencyFormat = (price, local = "en-US", format = "USD") => {
  return new Intl.NumberFormat(local, {
    style: "currency",
    currency: format,
  }).format(price);
};
