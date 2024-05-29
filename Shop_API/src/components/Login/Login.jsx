import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-16 w-auto"
          src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login To Your Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              placeholder="Email Address"
              className="block w-full rounded-md border-0 px-3 py-1.5 text-orange-900 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              placeholder="Password"
              className="block w-full rounded-md border-0 px-3 py-1.5 text-orange-800 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div className="text-sm">
            <NavLink
              to="#"
              className="font-semibold text-orange-700 hover:text-orange-400"
            >
              Forgot password?
            </NavLink>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-700 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-600">
          Not a member?
          <NavLink
            to="/register"
            className="font-semibold leading-6 text-orange-700 hover:text-orange-400"
          >
            Create Your New Account
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
