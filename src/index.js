import React from "react";
import ReactDOM from "react-dom";
import "./styles/appStyles.scss";

// Compoennts
import Banner from "./pages/Banner";

const Index = () => {
  return (
    <div className="app-container">
      <div className="app">
        <Banner />
        <div>Hamburger Menu</div>
        <div>
          ListOfTOdos
          <div>Card</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
