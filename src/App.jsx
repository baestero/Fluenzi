import React from "react";
import "./styles/global.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="appContainer">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
