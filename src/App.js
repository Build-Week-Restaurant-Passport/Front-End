import React from "react";
import Routes from "./utils/Routes";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Nav/Header";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes />
      </div>
      <Footer />
    </>
  );
}

export default App;
