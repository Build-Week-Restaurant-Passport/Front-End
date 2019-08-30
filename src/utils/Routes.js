import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Passports from "../components/Passports/Passports";
import PrivacyPolicy from "../components/Pages/PrivacyPolicy";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Restaurants from "../components/Restaurants/Restaurants";
import FormikContactUs from "../components/Pages/Contact";
import Terms from "../components/Pages/Terms";
import MyPassports from "../components/Passports/MyPassports/MyPassports.js";
import RestaurantPage from "../components/Restaurants/RestaurantPage";
import Signout from "../components/Nav/Signout";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signout" component={Signout} />
      <Route path="/privacypolicy" component={PrivacyPolicy} />
      <PrivateRoute path="/passports" component={Passports} />
      <PrivateRoute path="/mypassports" component={MyPassports} />
      <PrivateRoute path="/restaurants" component={Restaurants} />
      <Route path="/contact" component={FormikContactUs} />
      <Route path="/terms" component={Terms} />
      <PrivateRoute
        path="/restaurant/:restaurantID"
        component={RestaurantPage}
      />
    </div>
  );
};

export default Routes;
