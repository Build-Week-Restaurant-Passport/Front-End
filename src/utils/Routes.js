import React from "react";
import { Route } from "react-router-dom";

import Passports from "../components/Passports/Passports";
import PrivacyPolicy from "../components/Pages/PrivacyPolicy";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Restaurants from "../components/Restaurants/Restaurants";
import FormikContactUs from "../components/Pages/Contact";
import Terms from "../components/Pages/Terms";
import MyPassports from "../components/Passports/MyPassports/MyPassports.js";

const Routes = () => {
  return (
    <div>
      <Route path="/home" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/privacypolicy" component={PrivacyPolicy} />
      <Route path="/passports" component={Passports} />
      <Route path="/mypassports" component={MyPassports} />
      <Route path="/restaurants" component={Restaurants} />
      <Route path="/contact" component={FormikContactUs} />
      <Route path="/terms" component={Terms} />
    </div>
  );
};

export default Routes;
