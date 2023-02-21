import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000", {
          email,
          password,
        })
        .then((res) => {
          if ((res.data = "exist")) {
            history("/home", { state: { id: email } });
          } else if ((res.data = "notexist")) {
            alert("user not logged in");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    //     <div className="login">
    //       <h1>Login</h1>
    //       <form action="POST">
    //         <input
    //           type="email"
    //           onChange={(e) => {
    //             setEmail(e.target.value);
    //           }}
    //           placeholder="Email"
    //           name=""
    //           id=""
    //         />
    //         <input
    //           type="password"
    //           onChange={(e) => {
    //             setPassword(e.target.value);
    //           }}
    //           placeholder="Password"
    //           name=""
    //           id=""
    //         />

    //         <input type="submit" onClick={submit} />
    //       </form>

    //       <br />
    //       <p>OR</p>
    //       <br />

    //       <Link to="/signup">Signup Page</Link>
    //     </div>
    //   );
    <div className="Auth-form-container">
      <form className="Auth-form" action="POST">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?
            <Link to="/signup">Signup!</Link>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" onClick={submit} className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Login;
