import axios from 'axios';

export const executeCall = async (url, method = "GET", data, header = {}) => {

  const token = { Authorization: `Bearer ${localStorage.getItem('accessToken')}` };
  header = { ...header, ...token };

  const response = await axios({
    url: url,
    method: method,
    data: data,
    headers: header,
  });

  return response;
};