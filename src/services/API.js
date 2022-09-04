import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
