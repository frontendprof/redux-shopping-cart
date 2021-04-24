import React from "react";
// redux store
import reducer from "./reducer";
import { createStore } from 'redux';
import {Provider} from 'react-redux';

// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";


// redux stuff

// Initial store
const initialStore={
  cart:cartItems,
  total:115,
  amount:12
}





const store=createStore(reducer,initialStore)


function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar/>
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
