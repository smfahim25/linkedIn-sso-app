// component/Auth/LinkedInCallback.js
import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import UserContext from "../context/UserContext";
import { db } from "../../firebaseConfig";

const LinkedInCallback = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const hasProcessedRef = useRef(false);
  const { login } = useContext(UserContext); // Get login function from context

  const getAccessToken = async (code) => {
    const tokenResponse = await axios.post(
      `https://linkedin-proxy-server-1.onrender.com/api/linkedin/access-token`, // Your backend API
      { code }
    );
    return tokenResponse.data.access_token;
  };

  const fetchLinkedInProfile = async (accessToken) => {
    const profileResponse = await axios.get(
      `https://linkedin-proxy-server-1.onrender.com/api/linkedin/profile`,
      { params: { accessToken } }
    );
    const userData = {
      name: profileResponse.data.profile.name,
      email: profileResponse.data.profile.email,
      picture: profileResponse.data.profile.picture,
    };
    return userData;
  };

  const saveUserToFirebase = async (userData) => {
    try {
      await addDoc(collection(db, "users"), userData);
      console.log("User data saved successfully");
    } catch (err) {
      console.error("Error saving user data to Firebase: ", err);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authorizationCode = urlParams.get("code");

    const handleLinkedInAuth = async () => {
      if (authorizationCode && !hasProcessedRef.current) {
        hasProcessedRef.current = true;
        try {
          const accessToken = await getAccessToken(authorizationCode);
          const userData = await fetchLinkedInProfile(accessToken);

          // Store both the user data and the access token in the AuthContext
          login(userData, accessToken);

          // Save user data to Firebase
          await saveUserToFirebase(userData);

          setLoading(false);
          navigate("/dashboard");
        } catch (err) {
          navigate("/");
          console.error("Error:", err);
          setLoading(false);
        }
      }
    };

    handleLinkedInAuth();
  }, [navigate, login]);

  return loading ? (
    <div style={{ textAlign: "center", marginTop: "30px" }}>Loading...</div>
  ) : (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      Redirecting to dashboard...
    </div>
  );
};

export default LinkedInCallback;
