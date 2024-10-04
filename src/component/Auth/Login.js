// LinkedInLogin.js
import React from "react";
import "./Login.css"; // Add your CSS here

const LinkedInLogin = () => {
  // LinkedIn App Credentials
  const CLIENT_ID = "860d5bd232a4cu";
  const REDIRECT_URI =
    "https://linked-in-sso-ptxnvm438-smfahim25s-projects.vercel.app/auth/callback";
  const AUTH_URL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=foobar&scope=openid%20profile%20email`;
  const handleLinkedInLogin = () => {
    window.location.reload();
    window.location.href = AUTH_URL;
  };

  return (
    <div className="login-container">
      <h2>Create your account for free</h2>
      <p>Signup now. It's free and takes less than a blink of an eye.</p>
      <button onClick={handleLinkedInLogin} className="linkedin-button">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="LinkedIn"
          style={{ width: "20px" }}
        />
        Sign in with LinkedIn
      </button>
    </div>
  );
};

export default LinkedInLogin;
