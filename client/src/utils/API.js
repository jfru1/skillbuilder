import axios from "axios";



export default {


  saveClient: function(clientData) {
    return axios({
method:"post",
url:"http://localhost:3001/api/saveClient",
data:clientData
    })

  },


  checkClient: function(client){

    return axios({
method:"post",
url:"http://localhost:3001/api/checkClient",
data:client

    })
  },


saveSkills: function(clientSkill){

return axios({
  method:"post",
  url:"http://localhost:3001/api/addClientSkill",
  data:clientSkill



})


},

addPost: function(clientPost){

return axios({
  method:"post",
  url:"http://localhost:3001/api/addClientPost",
  data:clientPost


})


},

checkPost: function(clientEmail){

return axios({
  method:"post",
  url:"http://localhost:3001/api/checkClientPost",
  data:clientEmail
})


},






};
