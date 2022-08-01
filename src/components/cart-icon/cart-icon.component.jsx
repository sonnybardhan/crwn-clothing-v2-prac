import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {
  getCartItemCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';

import { CartIconContainer, ItemCount } from './cart-icon.styles';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartIcon = () => {
  const cartItemCount = useSelector(getCartItemCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
