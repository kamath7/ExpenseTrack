import React from "react";
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";

const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  const authInfo = {
    userID: result.user.uid,
    name: result.user.displayName,
    profilePhoto: result.user.photoURL,
    isAuth: true,
  };

  localStorage.setItem("auth", JSON.stringify(authInfo));
};

export const Auth = () => {
  return (
    <div className="login-page">
      <p>Sign In with Google</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign In with Google
      </button>
    </div>
  );
};
