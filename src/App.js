
import './App.css';
import React , {Suspense, useEffect}from 'react';
import {BrowserRouter, Route,Routes, Navigate,Link,Outlet} from 'react-router-dom'
import NotFound from './components/NotFound';
import Header from './components/Header';
import productApi from 'api/productApi';
import SignIn from 'features/Auth/page/SignIn';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Photo = React.lazy(()=> import ('./features/Photo'))
const config = {
  apiKey: 'AIzaSyAkjooyjE9sn4V3z5dUMFb4qAII20TofOo',
  authDomain: 'photo-app-ff4ec.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);

function App() {
  useEffect (()=>{
    const fetchProductList = async ()=> {
      try {
        const params = {
          _page: 1,
          _limit:10 
        }
        const response = await productApi.getAll(params)
        console.log(response , 'dat jcbsb');

      } catch (error){
        console.log(error, 'lỗi ');

      }
    }
    fetchProductList()

  },[])
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
      if(!user){
        console.log('chua dnag nhap');
        return
      }
      console.log('Logged in user ', user.displayName);
      const token = await user.getIdToken();
      console.log('logged in user', token);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);



  return (
    <div className='photo-app'>
      <Suspense fallback= {<div>Loading</div>}>
      <BrowserRouter>
      <Header></Header>

      {/* <ul>
        <li><Link to = "/photos">Go to photo page </Link></li>
        <li><Link to = "/photos/add">Go to Add new photo page </Link></li>
        <li><Link to = "/photos/123">Go to Edit photo page </Link></li>
      </ul> */}

      <Routes>
      <Route path="/" element={<Navigate to="/photos"/>} />
        <Route path='/photos/*' element={<Photo></Photo>}/>
        <Route path='signIn' element={<SignIn/>}/>
        <Route path='*' element= {<NotFound/>}/>
      </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
