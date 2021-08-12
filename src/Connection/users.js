import axios from 'axios';
// let url = 'http://localhost:3001';
let url = 'https://amztownbackend.herokuapp.com';

const getUsers = async data => {
  let response;
  response = await axios.get(`${url}/api/users/`);

  console.log(response);
  return response;
};

export { getUsers };
