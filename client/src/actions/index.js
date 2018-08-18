import Axios from 'axios';

 export const UPDATE_USER = 'UPDATE_USER';
 export const CREATE_USER = 'CREATE_USER';
 export const CREATE_SKILL = 'CREATE_SKILL';
 export const CHECK_USER = 'CHECK_USER';


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

export function createSkill(user){

return{

  type: CREATE_SKILL,
  payload:user
}

}

export function checkUser(user){

return{

  type: CHECK_USER,
  payload:user
}

}







//OUR api call to database
