import React, { useState, useEffect } from "react";
import { postRegister } from "../../store/actions";
import { connect, useSelector } from "react-redux";
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

  useEffect(() => {
    if (props.statuscode == 200) {
      props.history.push("/home");
    }
  }, [props.statuscode]);

  return (
    <div className="login">
      <div className="formContainer">
        <p className="formtitle">Sign Up</p>

        <div className="signinTextContainer">
          <span className=" signinTextForMobile">Already Have an Account?</span>
          <NavLink to="/home">
            <span className="signupNav">Sign in</span>
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
            <span className=" privacyText">
              By clicking Sign Up, you agree to our
            </span>
            <NavLink to="/terms">
              <span className="privacyNav">Terms and Conditions</span>
            </NavLink>
            <span>and</span>
            <NavLink to="/privacypolicy">
              <span className="privacyNav">Privacy Statement</span>
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
    isLoading: state.isLoading,
    statuscode: state.statuscode
  };
};

export default connect(
  mapStateToProps,
  { postRegister }
)(SignUp);
