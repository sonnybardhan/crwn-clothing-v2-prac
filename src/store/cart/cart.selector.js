import { createSelector } from 'reselect';

export const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const getCartItemCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0)
);

export const getTotalCartAmount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0)
);
