import React from "react";
import Routes from "./utils/Routes";
import SignIn from "./components/SignIn";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <h1>App</h1>
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
