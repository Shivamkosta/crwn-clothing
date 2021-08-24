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
