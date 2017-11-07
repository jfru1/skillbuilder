import axios from "axios";


export default {


  saveClient: function(clientData) {
    return axios({
method:"post",
url:"/api/saveClient",
baseURL:"https://gentle-wave-45898.herokuapp.com",
data:clientData
    })

  },


  checkClient: function(client){

    return axios({
method:"post",
url:"/api/checkClient",
baseURL:"https://gentle-wave-45898.herokuapp.com",
data:client

    })
  },


saveSkills: function(clientSkill){

return axios({
  method:"post",
  url:"/api/addClientSkill",
  baseURL:"https://gentle-wave-45898.herokuapp.com",
  data:clientSkill



})


},

addPost: function(clientPost){

return axios({
  method:"post",
  url:"/api/addClientPost",
  baseURL:"https://gentle-wave-45898.herokuapp.com",
  data:clientPost


})


},

checkPost: function(clientEmail){

return axios({
  method:"post",
  url:"/api/checkClientPost",
  baseURL:"https://gentle-wave-45898.herokuapp.com",
  data:clientEmail
})


},






};
