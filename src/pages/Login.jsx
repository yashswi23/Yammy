
import React, { useState } from "react";
import { auth, provider, signInWithPopup } from "../firebase.js";

const Login= () => {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log("User Info:", result.user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div>
      <h1>Google Sign-In in React</h1>
      {!user ? (
        <button onClick={handleGoogleLogin}>Sign in with Google</button>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <img src={user.photoURL} alt="User Profile" width="100" />
        </div>
      )}
    </div>
  );
};

export default Login;