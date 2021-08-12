import axios from 'axios';
// let url = "http://localhost:3001";
let url = 'https://amztownbackend.herokuapp.com';

const signin = async data => {
  let response;
  response = await axios.post(`${url}/api/users/login`, data);

  //   console.log(response);
  return response;
};

const signup = async data => {
  let response;
  response = await axios.post(`${url}/api/users/register`, data);

  //   console.log(response);
  return response;
};

export { signin, signup };
