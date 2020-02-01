import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Header from "./components/header/header.component";

import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shoppage/shop-page.component";
import SignInAndSignUpPage from "./pages/sign-in -and-sign-up-page/sign-in-and-sign-up.component";
import CheckOutPage from "./pages/checkout/checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action"



class App extends Component {
  
  unSubscribeFromAuth = null;  

  componentDidMount() {

    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });          
        });
      }

      setCurrentUser(userAuth);
     
    }); 
      
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.current_user  
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user =>  dispatch(setCurrentUser(user))
})



export default connect(mapStateToProps, mapDispatchToProps)(App);