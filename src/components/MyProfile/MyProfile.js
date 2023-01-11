import React, { useState, useEffect } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function MyProfile({}) {
  return <h1>My Profile</h1>;
}

export default withAuthenticationRequired(MyProfile);
