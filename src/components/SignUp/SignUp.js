import React, { useState } from "react";
import { postRegister } from "../../store/actions";
import { connect } from "react-redux";
import "./SignUp.css";
import { NavLink } from "react-router-dom";

const SignUp = props => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    password: "",
    userid: 0,
    username: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.postRegister(form);
  };

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
            <label style={{ fontWeight: "bold" }}>First Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="fname"
              placeholder="First Name"
              value={form.fname}
            />
          </p>
          <p className="loginInputs">
            <label style={{ fontWeight: "bold", fontSize: "2rem" }}>
              Last Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="lname"
              placeholder="Last Name"
              value={form.lname}
            />
          </p>
          <p className="loginInputs">
            <label style={{ fontWeight: "bold" }}>Email</label>

            <input
              className="input-style"
              onChange={handleChange}
              type="email"
              name="username"
              placeholder="Email"
              value={form.username}
            />
          </p>

          <p className="loginInputs">
            <label style={{ fontWeight: "bold" }}>Password</label>

            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="password"
              value={form.password}
            />
          </p>

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
