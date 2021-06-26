import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

export default function Logout() {
  const [isLogout, updateIsLogout] = useState(false);
  function logout() {
    localStorage.removeItem("user-info");
    updateIsLogout(true);
  }

  return (
    <>
      {isLogout ? <Redirect to="/" /> : null}
      {/* <Link TO="/">Log Out</Link> */}
      <button onClick={logout}>LogOut</button>
    </>
  );
}
