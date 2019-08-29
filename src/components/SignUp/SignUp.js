import React, { useState } from "react";
import { postRegister } from "../../store/actions";
import { connect } from "react-redux";
import "./SignUp.css";
import { NavLink } from "react-router-dom";

const SignUp = props => {
  const [form, setForm] = useState({
    email: "string",
    fname: "string",
    lname: "string",
    password: "string"
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.postRegister(form);
    // if (form.password !== form.confirmPassword) {
    //   alert("The passwords doesn't match");
    //   return false; // The form won't submit
    // } else return true; // The form will submit
  };

  console.log("sign up form", form);
  return (
    <div className="login">
      <div className="formContainer">
        <p className="formtitle">Sign Up</p>

        <div className="signinTextContainer">
          <p className=" signinTextForMobile">Already Have an Account?</p>
          <NavLink to="/home">
            <p className="signupNav">Sign in</p>
          </NavLink>
        </div>

        <form onSubmit={handleSubmit} className="loginForm">
          <p className="loginInputs">
            <label>First Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="firstname"
              placeholder="First Name"
              value={form.firstname}
            />
          </p>
          <p className="loginInputs">
            <label>Last Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={form.lastname}
            />
          </p>
          <p className="loginInputs">
            <label>Email</label>

            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
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
          {/* 
          <p className="loginInputs">
            <label>Confirm Password</label>

            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
            />
          </p> */}
          <div className="privacyTextContainer">
            <p className=" privacyText">
              By clicking Sign Up, you agree to our
            </p>
            <NavLink to="/terms">
              <p className="privacyNav">Terms and Conditions</p>
            </NavLink>
            <p>and</p>
            <NavLink to="/privacypolicy">
              <p className="privacyNav">Privacy Statement</p>
            </NavLink>
          </div>
          <button className="loginSubmit" type="submit">
            Continue
          </button>
        </form>
      </div>
      <img
        src="https://i.imgur.com/FQIAJte.jpg"
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
  { postRegister }
)(SignUp);
