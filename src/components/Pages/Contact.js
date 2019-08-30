import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import "./Contact.css";

const ContactUs = ({ errors, touched, values, status }) => {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    if (status) {
      setContact([...contact, status]);
    }
  }, [status, contact]);

  return (
    <div className="contactContainer">
      <div className="wrapper">
        <div className="company-info">
          <h1 className="handleeText">How Can We Help?</h1>
          <p className="contactText">
            Are you interested in learning more about Restaurant Passport? Enter
            your information in the form and a representative will contact you
            shortly.
          </p>
          <ul>
            <li className="contactText">
              <i className="fa fa-phone" /> placeholder number
            </li>
            <li className="contactText">
              <i className="fa fa-envelope" /> placeholder email
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3 className="handleeText">Email Us</h3>
          <div className="alert">Your message has been sent</div>
          <Form>
            <p>
              <label>Name</label>
              <Field type="text" name="name" />
              {touched.name && errors.name && (
                <p className="error">{errors.name}</p>
              )}
            </p>
            <p>
              <label>Company</label>
              <Field type="text" name="company" />
            </p>
            <p>
              <label>Email</label>
              <Field type="text" name="email" />
              {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
              )}
            </p>
            <p>
              <label>Phone Number</label>
              <Field type="text" name="phone" />
              {touched.phone && errors.phone && (
                <p className="error">{errors.phone}</p>
              )}
            </p>
            <p className="full">
              <label>Comments</label>
              <Field component="textarea" type="text" name="comments" />
            </p>
            {touched.comments && errors.comments && (
              <p className="error">{errors.comments}</p>
            )}
            <p className="full">
              <button type="submit">Submit!</button>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

const FormikContactUs = withFormik({
  mapPropstoValues({ name, comments }) {
    return {
      name: name || "",
      comments: comments || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please Enter name"),
    comments: Yup.string().required("Please enter comments")
  })
})(ContactUs);

export default FormikContactUs;
