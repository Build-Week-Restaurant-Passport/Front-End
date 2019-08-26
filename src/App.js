import React from "react";
import Routes from "./utils/Routes";
import SignIn from "./components/SignIn";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Nav/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
