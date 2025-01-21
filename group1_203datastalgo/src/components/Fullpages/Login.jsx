import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Parts/Footer";
import HeaderNonUser from "../Parts/Header";
import axios from "axios";
import login from '../CSS/login.css'

function Login() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password: pass,
      });

      if (response.status === 200) {
        alert("Login successful!");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <>
      <HeaderNonUser />
      <main className="content">
        <section className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username or Email</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Enter your username or email"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter your password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
              />
            </div>
            <button type="submit" className="btn submit-btn">
              Login
            </button>
          </form>
          <p className="form-footer">
            Don&apos;t have an account? <Link to="/signup">Sign up here</Link>.
          </p>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Login;
