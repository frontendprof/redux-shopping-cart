import React from "react";
// redux store
import reducer from "./reducer";
import { createStore } from 'redux';
import {Provider} from 'react-redux';

// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

const store=createStore(reducer)


function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar/>
      <CartContainer/>
    </Provider>
  );
}

export default App;
