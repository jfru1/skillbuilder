var client = require('./AxiosMod');



export default {


  saveClient: function(clientData) {
    return client({
method:"post",
url:"/api/saveClient",
data:clientData
    })

  },


  checkClient: function(client){

    return client({
method:"post",
url:"/api/checkClient",
data:client

    })
  },


saveSkills: function(clientSkill){

return client({
  method:"post",
  url:"/api/addClientSkill",
  data:clientSkill



})


},

addPost: function(clientPost){

return client({
  method:"post",
  url:"/api/addClientPost",
  data:clientPost


})


},

checkPost: function(clientEmail){

return client({
  method:"post",
  url:"/api/checkClientPost",
  data:clientEmail
})


},






};
