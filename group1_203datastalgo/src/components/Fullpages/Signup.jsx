import { Link } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../Parts/Footer";
import HeaderNonUser from "../Parts/Header";
import { getUsers, addUser } from '../Data/accounts'

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmedPass, setConfirmedPass] = useState("");
  const [users, setUsers] = useState(getUsers());

  function handleSignup(e) {
    e.preventDefault();

    // Validate passwords match
    if (pass !== confirmedPass) {
      alert("Passwords do not match!");
      return;
    }

    // Create a new user object
    const newUser = {
      id: Date.now(),
      username,
      email,
      password: pass,
    };

    // Add the user to the file
    addUser(newUser);

    // Update local state
    setUsers(getUsers());

    // Clear the form
    setUsername("");
    setEmail("");
    setPass("");
    setConfirmedPass("");
  }

  return (
    <>
      <HeaderNonUser />
      <main className="content">
        <section className="form-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignup} className="signup-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                placeholder="Confirm your password"
                onChange={(e) => setConfirmedPass(e.target.value)}
                value={confirmedPass}
              />
            </div>
            <button type="submit" className="btn submit-btn">
              Sign Up
            </button>
          </form>
          <p className="form-footer">
            Already have an account? <Link to="/login">Login here</Link>.
          </p>
        </section>
      </main>
      <h2>User List</h2>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users have signed up yet.</p>
      )}
      <Footer></Footer>
    </>
  );
}

export default Signup;
