import Axios from 'axios';

 export const UPDATE_USER = 'UPDATE_USER';
 export const CREATE_USER = 'CREATE_USER';

export function updateUser(user) {

  return {
    type: UPDATE_USER,
    payload: user
  }
}


export function createUser(user){

return{

  type: CREATE_USER,
  payload:user
}

}


//OUR api call to database
