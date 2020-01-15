import React from 'react';
import { Route, Switch , Redirect} from 'react-router-dom'
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from "./pages/checkout/checkout.component";
// import { auth, createUserProfileDocument  } from './firebase/firebase.utils';
// import { setCurrentUser } from './redux/user/user.action';

import { createStructuredSelector} from 'reselect';

import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.action'

//new
// import { selectCollectionsForPreview} from './redux/shop/shop.selector';

import './App.css';
// import { auth } from 'firebase';


class App extends React.Component {
  // constructor(){
  //   super();

  //   this.state = {
  //     currentUser :null
  //   }
  // }
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession} = this.props;

    checkUserSession();

    // const { setCurrentUser  } = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {

    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       }
    //       );


    //     });

    //   }

    //   setCurrentUser(userAuth)

    //   // addCollectionAndDocuments('collections',collectionsArray.map(({title,items}) => ({title,items})))


    // })

  }


  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        {/* currentUser = {this.state.currentUser} */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render = { () => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUpPage />) } />
          <Route exact path="/checkout" component={CheckoutPage}/> 

        </Switch>


      </div>
    );

  }

}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({

  checkUserSession: () => dispatch(checkUserSession()),
  


})

export default connect(mapStateToProps,mapDispatchToProps)(App);
