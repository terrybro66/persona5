import React, { useState } from "react";

const Login = ({ onSuccess, switchMode }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would typically send a request to your server to log in the user.
    // If the login is successful, call the onSuccess function.
    // This is a simplified example and doesn't actually log in the user.
    onSuccess();
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
      <button onClick={switchMode}>Register</button>
    </div>
  );
};

export default Login;
