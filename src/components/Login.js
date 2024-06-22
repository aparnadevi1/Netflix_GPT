import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="image"
        />
      </div>
      <form className="absolute p-12 w-3/12 mx-auto left-0 right-0 bg-black my-36 text-white bg-opacity-75">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

       {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 bg-gray-700 w-full"
        />
       } 

        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full  bg-gray-700 "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 w-full"
        />

        <button className="p-4 my-6 bg-red-700 text- rounded-lg w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up Now"
            : "Already have an account ? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
