import axios from "axios";



export default {


  saveClient: function(clientData) {
    return axios({
method:"post",
url:"/api/saveClient",
// baseURl:"http://localhost:3001",
data:clientData
    })

  },


  checkClient: function(client){

    return axios({
method:"post",
url:"/api/checkClient",
// baseURl:"http://localhost:3001",
data:client

    })
  },


saveSkills: function(clientSkill){

return axios({
  method:"post",
  url:"/api/addClientSkill",
  // baseURl:"http://localhost:3001",
  data:clientSkill



})


},

addPost: function(clientPost){

return axios({
  method:"post",
  url:"/api/addClientPost",
  // baseURl:"http://localhost:3001",
  data:clientPost


})


},

checkPost: function(clientEmail){

return axios({
  method:"post",
  url:"/api/checkClientPost",
  // baseURl:"http://localhost:3001",
  data:clientEmail
})


},






};
