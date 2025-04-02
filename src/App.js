import React from 'react'
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import './scss/app.scss'
import Header from './components/header';
import Home from './page/Home';
import Cart from "./page/Cart";
import NotFound from './page/NotFound';

export const SearchContext = React.createContext();

function App() {

  const [searchValue, setSearchValue] = useState("")
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
