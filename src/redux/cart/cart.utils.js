/*
    Utility functions allow us to keep our files clean and
    organize functions that we may need in multiple files in one location
*/
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    const newCartItems = cartItems.map((cartItem) => {
      console.log("Utisl: ", cartItem);
      const ret =
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      console.log("return", ret);
      return cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
    console.log("newCartItems; ", newCartItems);
    return newCartItems;
  }
  console.log("return 2: ", [...cartItems, { ...cartItemToAdd, quantity: 1 }]);
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
