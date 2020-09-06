import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Datepic from "./Datepic";

function SignUp() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <form className="text-center border border-light rounded bg-light p-5">
          <div class="form-group">
            <h3>Create a New Account</h3>
            <h6>It's quick and easy.</h6>
            <label for="fName"></label>
            {/*name input*/}

            <input
              type="name"
              class="form-control"
              id="fName"
              placeholder="Enter your name"
              required
            />
            <label for="sName"></label>
            <input
              type="surname"
              class="form-control"
              id="sName"
              placeholder="Enter surname"
              required
            />
            {/*email input*/}
            <label for="email1"></label>
            <input
              type="email"
              class="form-control"
              id="email1"
              placeholder="Enter email"
              required
            />
            {/*password input*/}
            <label for="pwd"></label>
            <input
              type="password"
              class="form-control"
              id="pwd"
              placeholder="New password"
              required
            />
            <br />

            {/*checkbox radio*/}

            <h5>Gender</h5>
            <div className="form-check form-check-inline">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="male"
                  value="option1"
                  checked
                  required
                />
                <label class="form-check-label" for="male">
                  Male
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="fMale"
                  value="option2"
                  required
                />
                <label class="form-check-label" for="fMale">
                  Female
                </label>
              </div>
            </div>
            <br />

            {/*datepicker*/}
            <h5>Birth date</h5>
            <br />
            <Datepic />

            <br />
            {/*Sign up button*/}
            <div>
              <button type="submit" class="btn btn-primary">
                Create New Account
              </button>
            </div>
            <div>
              <p>
                Already have account <a href="./Login">Log in</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
