import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import SignUp from "./signUp/SignUp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function Login() {
  return (
    <Router>
      <div>
        <div className="d-flex justify-content-center">
          <form className="text-center border border-light rounded bg-light p-5">
            {/*email input*/}
            <div className="form-group">
              <label for="inputEmail">Email address </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                required
              />
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            {/*password input*/}
            <div className="form-group">
              <label for="inputPassword">Password </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                required
              />
              <div className="invalid-feedback">
                Please fill out this field.
              </div>
            </div>
            {/*checkbox*/}
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="check1" />
              <label className="form-check-label" for="check1">
                Remember me
              </label>
            </div>
            {/*button*/}
            <div>
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
              <div>
                <a href="">Forgot password?</a>
              </div>
            </div>
            <hr />
            <button className="btn btn-success">
              <Route>
                <Link to="/SignUp">Sign Up </Link>
              </Route>
            </button>
          </form>
        </div>
      </div>
    </Router>
  );
}
export default Login;
