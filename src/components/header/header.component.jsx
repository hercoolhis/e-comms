import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import {auth} from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
    console.log(currentUser);
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
                

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {currentUser: state.user.current_user }
}

export default connect(mapStateToProps)(Header);