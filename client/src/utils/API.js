import axios from "axios";

export default {


  saveClient: function(clientData) {
    return axios({
method:"post",
url:"/api/saveClient",
baseURL: process.env.AXIOS_API,
data:clientData
    })

  },


  checkClient: function(client){

    return axios({
method:"post",
url:"/api/checkClient",
baseURL: process.env.AXIOS_API,
data:client

    })
  },


saveSkills: function(clientSkill){

return axios({
  method:"post",
  url:"/api/addClientSkill",
  data:clientSkill



})


},

addPost: function(clientPost){

return axios({
  method:"post",
  url:"/api/addClientPost",
  data:clientPost


})


},

checkPost: function(clientEmail){

return axios({
  method:"post",
  url:"/api/checkClientPost",
  data:clientEmail
})


},






};
