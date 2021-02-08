import React from "react";
import { Header } from "./components";
import { Route } from "react-router-dom";
import { Home, Footer, Cart } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
