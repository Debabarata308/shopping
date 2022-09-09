import './App.css';
import Header from './header/Header';
import BodyContent from './bodyContent/BodyContent';
import Cart from './cart/Cart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Header />

          </div>
        </div>
        
      </div>
      <Routes>
        <Route path="/" element={<BodyContent />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
