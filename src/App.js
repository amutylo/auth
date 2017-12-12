import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };
  
  componentWillMount(){

    firebase.initializeApp({
      apiKey: 'AIzaSyAKjN4WhJ-Qz-cqzZ9UDU1XpW5WD0Ai7fI',
      authDomain: 'auth-269d0.firebaseapp.com',
      databaseURL: 'https://auth-269d0.firebaseio.com',
      projectId: 'auth-269d0',
      storageBucket: 'auth-269d0.appspot.com',
      messagingSenderId: '478315114905'
    });
  
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
});
  }

  renderContent(){
    switch(this.state.loggedIn) {
      case false:
      return <LoginForm />

      case true:
      return(
        <CardSection>
          <Button onPress={() => {firebase.auth().signOut()}}>
            Log Out
          </Button>
        </CardSection>
        );
      
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;