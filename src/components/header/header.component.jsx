import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { HeaderContainer, LinkContainer, OptionsContainer, OptionLink } from "./header.styles";
import { startUserSignOut } from "../../redux/user/user.action";


const Header = ({ currentUser, hidden, signUserOut }) => {
    
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
                    <OptionLink as='div'  onClick={signUserOut}>SIGN OUT</OptionLink> 
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

const mapDispatchToProps = dispatch => ({
    signUserOut: () => dispatch(startUserSignOut())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);