import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/common/Input/Input";
import { createProfile } from "../../../api/profileApi";
import { useAuth0 } from "@auth0/auth0-react";

function CreateProfile({ email }) {
  const { getAccessTokenSilently } = useAuth0();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      authEmail: email,
      userId: email,
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = async (data) => {
    console.log(data);
    const token = await getAccessTokenSilently();

    const response = await createProfile(data, token);
    console.log("response", response);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="authEmail"
        name="authEmail"
        type="email"
        label="Email"
        register={register}
        readOnly="readonly"
      />
      <Input
        id="userId"
        name="userId"
        type="text"
        label="User ID / Display Name"
        register={register}
      />
      <Input
        id="firstName"
        name="firstName"
        type="text"
        label="First Name"
        register={register}
      />
      <Input
        id="lastName"
        name="lastName"
        type="text"
        label="Last Name"
        register={register}
      />

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default CreateProfile;
