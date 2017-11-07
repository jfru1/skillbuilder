import axios from "axios";


export default {


  saveClient: function(clientData) {
    return axios({
method:"post",
url:"/api/saveClient",
baseURL:"",
data:clientData
    })

  },


  checkClient: function(client){

    return axios({
method:"post",
url:"/api/checkClient",
baseURL:"",
data:client

    })
  },


saveSkills: function(clientSkill){

return axios({
  method:"post",
  url:"/api/addClientSkill",
  baseURL:"",
  data:clientSkill



})


},

addPost: function(clientPost){

return axios({
  method:"post",
  url:"/api/addClientPost",
  baseURL:"",
  data:clientPost


})


},

checkPost: function(clientEmail){

return axios({
  method:"post",
  url:"/api/checkClientPost",
  baseURL:"",
  data:clientEmail
})


},






};
