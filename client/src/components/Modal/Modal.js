import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Modal = ({ setIsAuthenticated }) => {
  const [showLogin, setShowLogin] = useState(true);

  const switchMode = () => {
    setShowLogin(!showLogin);
  };

  const handleSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      {showLogin ? (
        <Login
          onSuccess={handleSuccess}
          switchMode={() => setShowLogin(false)}
        />
      ) : (
        <Register
          onSuccess={handleSuccess}
          switchMode={() => setShowLogin(true)}
        />
      )}
    </div>
  );
};

export default Modal;
