import React, { useContext, useEffect } from 'react';
import {BrowserRouter} from 'react-router-dom'
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './components/AppRouter';
import "./Styles/App.css"
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import Footer from './components/Footer';

function App() {

  const {supplements} = useContext(Context);

  useEffect(() => {
    supplements.fetchAllSupples()
      .then((data) => {
        supplements.setTotalCount(data.length);
        supplements.setBestSupples(data);
        supplements.setAreAllLoading(false);
      })
  }, [])

  if(supplements.areAllLoading) {
    return (
      <div className='loading'>
        Loading...
      </div>
    )
  }
  
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
}

export default observer(App);
