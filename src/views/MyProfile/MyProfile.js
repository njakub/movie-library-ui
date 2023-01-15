import React, { useState, useEffect } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import CreateProfile from "./CreateProfile/CreateProfile";

function MyProfile({}) {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  console.log("user", user);

  return (
    <>
      <h1>My Profile</h1>
      <CreateProfile email={email} />
    </>
  );
}

export default withAuthenticationRequired(MyProfile);
