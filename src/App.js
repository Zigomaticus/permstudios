import React from "react";
import { Header } from "./components";
import { Route } from "react-router-dom";
import { Home, Footer } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default App;
