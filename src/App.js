import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyAKjN4WhJ-Qz-cqzZ9UDU1XpW5WD0Ai7fI',
      authDomain: 'auth-269d0.firebaseapp.com',
      databaseURL: 'https://auth-269d0.firebaseio.com',
      projectId: 'auth-269d0',
      storageBucket: 'auth-269d0.appspot.com',
      messagingSenderId: '478315114905'
    });
  
  }
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;