import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();
  const { handleLoginSuccess } = useContext(AuthContext);

  useEffect(() => {
    let timer;
    if (loginMessage === "Login Successfully") {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      const timeout = setTimeout(() => {
        clearInterval(timer);
        navigate("/");
      }, 5000);

      return () => {
        clearInterval(timer);
        clearTimeout(timeout);
      };
    }
  }, [loginMessage, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const response = await axios.post("http://localhost:3000/login", userData);
      const data = response.data;

      const token = data.token;
      localStorage.setItem("token", token);

      setLoginMessage("Login Successfully");
      handleLoginSuccess();
    } catch (error) {
      if (error.response && error.response.data.error) {
        setLoginMessage(error.response.data.error);
      } else {
        setLoginMessage("Something went wrong");
      }
      console.log(error);
    }
  };

  return (
    <div className="login-body">
      <section className="login-body-container">
        <div className="login-container">
          <div className="form-container">
            <h1 className="opacity">LOGIN</h1>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button className="login-button" type="submit">
                LOG IN
              </Button>
            </form>
            {loginMessage && (
              <p
                className={`message login-msg ${
                  loginMessage === "Login Successfully" ? "success" : "error"
                }`}
              >
                {loginMessage}
              </p>
            )}
            {loginMessage === "Login Successfully" && countdown > 0 && (
              <p className="countdown-timer login-timer">
                Redirecting in <span className="timer">{countdown}</span> seconds to HOME...
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
