import React from "react";
import "./pages/homepage/homepage.styles.scss";
import HomePage from "../pages/homepage/homepage.component.jsx";
import ShopPage from '../pages/shop/shop.component.jsx';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "../components/header/header.component";
import SignInAndSignUpPage from "../pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth,createUserProfileDocument } from '../firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          console.log("snapshot",snapShot.data());
          this.setState({
            currentUser : {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
        
      }
      this.setState({ currentUser: userAuth });
      // createUserProfileDocument(user);
      console.log("setState", this.setState({ currentUser: userAuth }));
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    console.log("state",this.state);
    return (
      <div>
        <Router>
        <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SignInAndSignUpPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
