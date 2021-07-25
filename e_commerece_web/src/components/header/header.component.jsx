import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { ReactComponent as Logo } from '../../images/Coforge-Logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import {selectCartHidden } from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.style.scss';

const Header = ({ currentUser, hidden, signOutStart }) => (

  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <Link className='option' to='/' onClick={signOutStart}>
          SIGN OUT
        </Link>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
       <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
  });

  const mapDispatchToProps = dispatch =>({
   signOutStart: () => dispatch(signOutStart())
  })

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Header);