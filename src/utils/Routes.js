import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Route } from "react-router-dom";

import Passports from "../components/Passports";
import PrivacyPolicy from "../components/Pages/PrivacyPolicy";
import SignIn from "../components/SignIn/SignIn";

const Routes = () => {
  return (
    <div>
      <Route exact path="/home" component={SignIn} />
      <Route exact path="/privacypolicy" component={PrivacyPolicy} />
      <PrivateRoute exact path="/passports" component={Passports} />
    </div>
  );
};

export default Routes;
