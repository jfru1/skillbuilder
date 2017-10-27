import axios from "axios";


export default {


  saveClient: function(clientData) {
    return axios({
method:"post",
url:"/api/saveClient",
baseURL:"http://localhost:3001",
data:clientData
    })

  },


  checkClient: function(client){

    return axios({
method:"post",
url:"/api/checkClient",
baseURL:"http://localhost:3001",
data:client

    })
  },


saveSkills: function(clientSkill){

return axios({
  method:"post",
  url:"/api/addClientSkill",
  baseURL:"http://localhost:3001",
  data:clientSkill



})


},

addPost: function(clientPost){

return axios({
  method:"post",
  url:"/api/addClientPost",
  baseURL:"http://localhost:3001",
  data:clientPost


})


},

checkPost: function(clientEmail){

return axios({
  method:"post",
  url:"/api/checkClientPost",
  baseURL:"http://localhost:3001",
  data:clientEmail
})


},






};
