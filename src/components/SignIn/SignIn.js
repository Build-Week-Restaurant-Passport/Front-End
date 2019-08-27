import React, { useState } from "react";
import { connect } from "react-redux";
import { postLogin } from "../../store/actions";
import "./SignIn.css";
import { ButtonContainer } from "../styled-components/Button";
import { NavLink } from "react-router-dom";

const Signin = props => {
  const [form, setForm] = useState({ username: "admin", password: "password" });

  const handleChange = e => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.postLogin(form);
    props.history.push("/passports");
  };

  return (
    <div className="login">
      <div className="formContainer">
        <h1 className="formTitle">Welcome back!</h1>
        <p className="signinText">Sign in with your email and password.</p>
        <form onSubmit={handleSubmit} className="loginForm">
          <p className="loginInputs">
            <label>Username</label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="username"
              value={form.username}
            />
          </p>
          <p className="loginInputs">
            <label>Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="password"
              value={form.password}
            />
          </p>

          <ButtonContainer>Submit</ButtonContainer>
        </form>
        <div className="signinTextContainer">
          <p className=" signinTextForMobile">Don't have an account?</p>
          <NavLink to="/signup">
            <p className="signupNav">Sign up</p>
          </NavLink>
        </div>
      </div>
      <img
        src="https://i.imgur.com/e5Ox46h.jpg"
        alt="Delicious Pasta"
        className="loginImage"
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { postLogin }
)(Signin);
