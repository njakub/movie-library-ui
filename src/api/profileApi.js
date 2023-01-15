import axios from "axios";

async function createProfile(user, token) {
  return axios
    .post("http://localhost:6060/api/profile", user, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "http://localhost:6060",
      },
    })
    .then(function (response) {
      // handle success
      console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

export { createProfile };
