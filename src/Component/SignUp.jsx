import { React, useState } from "react";
import login1 from "../images/login1.png";
import "../css/sign.css";
import "../css/login.css";
import Details from "./Details";
import { Link } from "react-router-dom";
import eye from "../images/eye.png";
import { useHistory } from "react-router";

export default function SignUpp() {
  const [eyeImg, setEyeImg] = useState(false);
  const [eyeImg1, setEyeImg1] = useState(false);

  //State for Validation Purpose
  const [userErr, setUserErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [cPassErr, setCPassErr] = useState("");
  //State for Form field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const history = useHistory();

  let name_Ch = /^([a-zA-Z\s]){2,15}$/;
  let email_ch = /^([_\-.0-9a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let phone_ch = /([+\-0-9]){10,14}$/;
  function valid() {
    if (
      !name_Ch.exec(name) &&
      !email_ch.exec(email) &&
      !phone_ch.exec(phone) &&
      password.length < 7 &&
      cpassword.length < 7
    ) {
      setUserErr("Name is Required");
      setEmailErr("Password is required");
      setPhoneErr("Wrong Number");
      setPassErr("password length should be more than 7");
      setCPassErr("password length should be more than 7");
    } else if (!name_Ch.exec(name)) {
      setUserErr("User Name must be 3-15");
    } else if (!email_ch.exec(email)) {
      setEmailErr("Invalid Email Address");
    } else if (!phone_ch.exec(phone)) {
      setPhoneErr("Wrong Number");
    } else if (password.length < 7) {
      setPassErr("password length should be more than 7");
    } else if (cpassword.length < 7) {
      setCPassErr("password length should be more than 7");
    } else if (password !== cpassword) {
      setCPassErr("password And Confirm Password must be same");
    } else {
      return true;
    }
  }

  function submit() {
    if (valid()) {
      let data = { name, email, phone, password, cpassword };
      fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then((result) => {
        result.json().then((resp) => {
          console.log("result json:" + resp);
        });
      });

      history.push("/");
    }
  }
  function formHandler(e) {
    e.preventDefault();
  }

  return (
    <>
      <section className="login">
        <div className="img"></div>
        <div className="earth-block"></div>
        <div className="center">
          <div className="leftSide">
            <div className="sign">
              <img src={login1} alt="loginImage" />
              <form onSubmit={formHandler}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter User Name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  value={name}
                  autoComplete="off"
                  required
                />
                {userErr ? (
                  <>
                    <span style={{ color: "red", fontSize: "1.5rem" }}>
                      {userErr}
                    </span>
                  </>
                ) : null}

                <input
                  type="email"
                  placeholder="Enter email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  name="email"
                  value={email}
                  autoComplete="off"
                  required
                />
                {emailErr ? (
                  <>
                    <span style={{ color: "red", fontSize: "1.5rem" }}>
                      {emailErr}
                    </span>
                  </>
                ) : null}

                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                  name="phone"
                  value={phone}
                  autoComplete="off"
                  required
                />
                {phoneErr ? (
                  <>
                    <span style={{ color: "red", fontSize: "1.5rem" }}>
                      {phoneErr}
                    </span>
                  </>
                ) : null}

                <input
                  type={eyeImg ? "text" : "password"}
                  placeholder="Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  name="password"
                  value={password}
                  autoComplete="off"
                  required
                />
                <img
                  src={eye}
                  alt="eyeImage"
                  onClick={() => setEyeImg(!eyeImg)}
                  style={{
                    width: "3.5rem",
                    marginTop: "-3.2rem",
                    marginLeft: "31rem",
                    cursor: "pointer",
                  }}
                />
                {passErr ? (
                  <>
                    <span style={{ color: "red", fontSize: "1.5rem" }}>
                      {passErr}
                    </span>
                  </>
                ) : null}

                <input
                  type={eyeImg1 ? "text" : "password"}
                  placeholder="Password"
                  onChange={(event) => {
                    setCpassword(event.target.value);
                  }}
                  name="cpassword"
                  value={cpassword}
                  autoComplete="off"
                  required
                />
                <img
                  src={eye}
                  alt="eyeImage"
                  onClick={() => setEyeImg1(!eyeImg1)}
                  style={{
                    width: "3.5rem",
                    marginTop: "-3.2rem",
                    marginLeft: "31rem",
                    cursor: "pointer",
                  }}
                />
                {cPassErr ? (
                  <>
                    <span style={{ color: "red", fontSize: "1.5rem" }}>
                      {cPassErr}
                    </span>
                  </>
                ) : null}

                <button className="signbtn" type="submit" onClick={submit}>
                  Register
                </button>
              </form>
            </div>
          </div>

          <div className="rightSide">
            <Details />
            <div className="alreadySign">
              <p>Already Signed Up?</p>

              <Link className="signinLink" to="/">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
