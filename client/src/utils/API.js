import axios from "axios";



const firstAPI = axios.create({

  baseURL: "https://gentle-wave-45898.herokuapp.com"
})





export default {


  saveClient: function(clientData) {
    return axios({
method:"post",
url:"/api/saveClient",
data:clientData
    })

  },


  checkClient: function(client){

    return firstAPI({
method:"post",
url:"/api/checkClient",
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
