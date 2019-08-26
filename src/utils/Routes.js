import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Route } from "react-router-dom";

import Passports from "../components/Passports";

const Routes = () => {
  return (
    <div>
      <h1>Routes</h1>
      {/* <Route exact path="/" component={Login} /> */}
      <PrivateRoute exact path="/passports" component={Passports} />
    </div>
  );
};

export default Routes;
