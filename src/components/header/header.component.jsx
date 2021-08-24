import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { createStructuredSelector } from 'reselect';


import "./header.styles.scss";
import CartIcon  from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import { selectCurrentUser} from '../../redux/user/user.selector';


const Header = ({ currentUser,hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>

        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
          <CartIcon  />
          
      </div>
      {
        hidden ? null : <CartDropdown/>
      }
      
    </div>
  );
};
const mapStateToProps = createStructuredSelector ({
  currentUser:selectCurrentUser,
  hidden: selectCartHidden
})

// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
//   currentUser,
//   hidden
// })
export default connect(mapStateToProps)(Header);
