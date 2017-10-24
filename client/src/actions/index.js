import Axios from 'axios';

 export const UPDATE_USER = 'UPDATE_USER';

export function updateUser(user) {


  console.log(user)
  return {
    type: updateUser,
    payload: user
  }
}


//OUR api call to database
