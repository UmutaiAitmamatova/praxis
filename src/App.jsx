import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import SvgLogo from './assets/img/pizza-logo.svg';
import { Header } from "./components";
import {Home, Cart} from './pages';


function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">
          <Routes>
            <Route>
            <Route path='/' element={<Home/>} exact/>
        <Route path='/cart' element={<Cart/>} exact/>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
