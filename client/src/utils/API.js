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


};
