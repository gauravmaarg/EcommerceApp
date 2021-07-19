import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../images/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden , itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

// const mapStateToProps = ({cart: {cartItems}}) => {
//   console.log("inside cart-icon mapStateToProps");
//   return ({
//     itemCount: cartItems.reduce(
//       (accumalatedQuantity,cartItem) =>
//        accumalatedQuantity + cartItem.quantity,0)
//     // itemCount: selectCartItemCount(state)
//   });
// }

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);