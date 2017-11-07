import axios from "axios";
var express = require('express')

export default {


  saveClient: function(clientData) {
    return axios({
method:"post",
url:"/api/saveClient",
baseURL:process.env.AXIOS_API,
data:clientData
    })

  },


  checkClient: function(client){

    return axios({
method:"post",
url:"/api/checkClient",
baseURL:process.env.AXIOS_API,
data:client

    })
  },


saveSkills: function(clientSkill){

return axios({
  method:"post",
  url:"/api/addClientSkill",
  baseURL:process.env.AXIOS_API,
  data:clientSkill



})


},

addPost: function(clientPost){

return axios({
  method:"post",
  url:"/api/addClientPost",
  baseURL:process.env.AXIOS_API,
  data:clientPost


})


},

checkPost: function(clientEmail){

return axios({
  method:"post",
  url:"/api/checkClientPost",
  baseURL:process.env.AXIOS_API,
  data:clientEmail
})


},






};
