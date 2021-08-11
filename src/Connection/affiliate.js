import axios from 'axios';
let url = 'http://localhost:3001';

const getCodes = async data => {
  let response;
  response = await axios.get(`${url}/api/affiliate/`);

  console.log(response);
  return response;
};

const editCodes = async data => {
  console.log(data);
  let response;
  response = await axios.post(`${url}/api/affiliate/edit`, data);

  console.log(response);
  return response;
};

const getApiKey = async data => {
  let response;
  response = await axios.get(`${url}/api/apikey/`);

  console.log(response);
  return response;
};

const updateApiKey = async data => {
  console.log(data);
  let response;
  response = await axios.post(`${url}/api/apikey/edit`, data);

  console.log(response);
  return response;
};

export { getCodes, editCodes, getApiKey, updateApiKey };
