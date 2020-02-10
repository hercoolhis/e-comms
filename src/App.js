import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Header from "./components/header/header.component";

import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shoppage/shop-page.component";
import SignInAndSignUpPage from "./pages/sign-in -and-sign-up-page/sign-in-and-sign-up.component";
import CheckOutPage from "./pages/checkout/checkout.component";


import { connect } from "react-redux";




class App extends Component {
  
  unSubscribeFromAuth = null;  

  componentDidMount() { 
      
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




export default connect(mapStateToProps, null)(App);