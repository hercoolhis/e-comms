import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => {
    
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    Shop
                </Link>
                <Link className="option" to="/contact">
                    Contact
                </Link>
                

                {
                    currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> 
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }

                
                <CartIcon></CartIcon>               

            </div>

            {
                hidden ? 
                ""
                :
                <CartDropDown></CartDropDown>
            }
            
        </div>
    )
}

const mapStateToProps = ({user: { current_user }, cart: { hidden }}) => {   
    return { currentUser: current_user, hidden }
}

export default connect(mapStateToProps)(Header);