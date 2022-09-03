import axios from "axios";
import Cookie from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

//新しいユーザーを登録
export const registerUser =  (username, email, password) => {
  return new Promise((resolve, reject) => {
  axios
    .post(`${API_URL}/auth/local/register`, {
      username,
      email,
      password,
    })
    .then((res) => {
      Cookie.set("token", res.data.jwt, {expires: 7});
      resolve(res);
      console.log(res.data.jwt);
      window.location.href = "/";
    })
    .catch((err) => {
      reject(err);
      console.log(err)
    });
  });
};

export const login =  (identifier, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${API_URL}/auth/local`, {
        identifier,
        password,
      })
      .then((res) => {
        Cookie.set("token", res.data.jwt, {expires: 7});
        resolve(res);
        // window.location.href = "/";
      })
      .catch((err) => {
        console.log(err)
        reject(err);
      });
  });
};
