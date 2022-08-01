import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  addCartItem,
  removeCartItem,
  clearCartItem,
  setCartItems,
} from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, price, quantity } = cartItem;

  // const { clearItemFromCart, addItemToCart, removeItemToCart } =
  //   useContext(CartContext);

  const clearItemHandler = () => {
    dispatch(setCartItems(clearCartItem(cartItems, cartItem)));
    // clearItemFromCart(cartItem)
  };
  const addItemHandler = () => {
    // addItemToCart(cartItem);
    dispatch(setCartItems(addCartItem(cartItems, cartItem)));
  };

  const removeItemHandler = () => {
    // removeItemToCart(cartItem);
    dispatch(setCartItems(removeCartItem(cartItems, cartItem)));
  };
  // const clearItemHandler = () => clearItemFromCart(cartItem);
  // const addItemHandler = () => addItemToCart(cartItem);
  // const removeItemHandler = () => removeItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price * quantity}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
