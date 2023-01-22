import React from "react";
import { useFormik } from "formik";

const SignIn = () => {
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("User Sign In and Admin login not used");
    },
  });

  return (
    <div className="text-center">
      <h1>Unavailable Page</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="formikLabel">
          E-mail
        </label>
        <br />
        <input
          className="formikInput mt-2"
          disabled
          type="text"
          name="email"
          placeholder="Please enter your e-mail"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password" className="formikLabel">
          Password
        </label>
        <br />
        <input
          className="formikInput mt-2"
          disabled
          type="password"
          name="password"
          placeholder="Please enter your password"
          onChange={handleChange}
        />
        <br />
        <button
          type="submit"
          className="btn btn-danger btn-block mt-3 "
          disabled
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
