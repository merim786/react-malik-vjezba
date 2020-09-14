import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
