import { Routes, Route } from "react-router-dom";

import './scss/app.scss'
import Header from './components/header';
import Home from './page/Home';
import Cart from "./page/Cart";
import NotFound from './page/NotFound';

function App() {

  return (
    <div className="wrapper">
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
    </div>
  );
}

export default App;
