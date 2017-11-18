var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'https://gentle-wave-45898.herokuapp.com/',
  /* other custom settings */
});

module.exports = axiosInstance;
