import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Component/main/Footer";
import Home from "./Component/main/Home";
import { Route, Switch } from "react-router-dom";
import EssNav from "./Component/main/EssNav";
import RequestDetails from "./Component/main/ESS/RequestDetails";
import WorkList from "./Component/main/WorkList";
import Timesheet from "./Component/main/Timesheet";
import EssRequest from "./Component/main/ESS/EssRequest";
import SignIn from "./Component/Login_Signup/SignIn";
import SignUp from "./Component/Login_Signup/SignUp";
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
        <Route exact path="/home" component={Home}></Route>

        <Route exact path="/essnav" component={EssNav}></Route>

        <Route exact path="/essrequest" component={EssRequest}></Route>

        <Route exact path="/worklist" component={WorkList}></Route>

        <Route exact path="/timesheet" component={Timesheet}></Route>

        <Route exact path="/requestdetails" component={RequestDetails}></Route>
      </Switch>

      <Footer />

      {/* <Home2/> */}
    </>
  );
}

export default App;
