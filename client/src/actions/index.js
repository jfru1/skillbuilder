import Axios from 'axios';

 export const UPDATE_USER = 'UPDATE_USER';

export function updateUser(user) {

console.log(user)


  return {
    type: UPDATE_USER,
    payload: user
  }
}


//OUR api call to database
