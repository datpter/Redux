import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {BrowserRouter, Route,Routes, Navigate,Link,Outlet} from 'react-router-dom'
  
  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    // signInSuccessUrl: '/photos',
    signInSuccessUrl: window.location.origin + '/photos',

    
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  
    ],
 
  };
 
function SignIn() {
    const user = firebase.auth().currentUser;

    // Nếu có người dùng, điều hướng đến trang photos
    if (user) {
      return <Navigate to="/photos" />;

    }
    return (
      <div>
        <div className="text-center">
          <h2>Login Form</h2>
  
          <p>or login with social accounts</p>
        </div>
  
        <StyledFirebaseAuth
  uiConfig={uiConfig}
  firebaseAuth={firebase.auth()}
/>

      </div>
    );
  }
  
  export default SignIn;