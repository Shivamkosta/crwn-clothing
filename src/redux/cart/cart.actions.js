import CartActionTypes from "./cart.types";
import CartActionType from "./cart.types";

const toggleCartHidden = () => ({
  type: CartActionType.TOGGGLE_CART_HIDDEN,
});
export default toggleCartHidden;

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})
export const removeItem = item => ({
  type: CartActionType.ROMOVE_ITEM,
  payload: item
})
export const clearItemFromCart = item => ({
  type: CartActionType.CLEAR_ITEM_FROM_CART,
  payload: item
});

