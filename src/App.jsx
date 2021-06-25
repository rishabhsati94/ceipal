import React from 'react'
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom'


function App() {
  return (
   <>
   <Route exact path="/">
      <SignIn/>
    </Route>
    <Route exact path="/signup">
      <SignUp/>
    </Route>
   </>
  );
}

export default App;
