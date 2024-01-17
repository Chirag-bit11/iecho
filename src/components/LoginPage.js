// src/components/LoginPage.js
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex">
      {/* Left side - Form */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        {/* Your login form goes here */}
        <form>
          <div class="form-check mb-3">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="rememberPasswordCheck"
            />
            <label class="form-check-label" for="rememberPasswordCheck">
              Remember password
            </label>
          </div>

          <div class="d-grid">
            <button
              class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
              type="button"
              onClick={() => this.submit()}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      {/* Right side - Image */}
      <div className="hidden md:block md:flex-shrink-0">
        <img
          src="your-image-url.jpg"
          alt="Login"
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
