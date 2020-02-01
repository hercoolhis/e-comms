import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { HeaderContainer, LinkContainer, OptionsContainer, OptionLink } from "./header.styles";


const Header = ({ currentUser, hidden }) => {
    
    return (
        <HeaderContainer>
            <LinkContainer to="/">
                <Logo className="logo"></Logo>
            </LinkContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    Shop
                </OptionLink>
                <OptionLink to="/contact">
                    Contact
                </OptionLink>
                

                {
                    currentUser ? 
                    <OptionLink as='div'  onClick={() => auth.signOut()}>SIGN OUT</OptionLink> 
                    :
                    <OptionLink to="/signin">SIGN IN</OptionLink>
                }

                
                <CartIcon></CartIcon>               

            </OptionsContainer>

            {
                hidden ? 
                ""
                :
                <CartDropDown></CartDropDown>
            }
            
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


export default connect(mapStateToProps)(Header);