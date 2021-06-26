import React from "react";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import Logout from "./Component/Logout";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route path="/home" component={Home}></Route>
        <Route path="/logout" component={Logout}></Route>
      </Switch>
    </>
  );
}

export default App;
