import axios from "axios";
//config axios for pokeapi with custom jwt token handling
export default () => {
  return axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
