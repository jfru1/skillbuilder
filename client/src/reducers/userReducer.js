import {updateUser} from '../actions/index';

const DEFAULT_STATE = {
name:"",
email:"",
password:"",
skill:"",
goal:"",
steps:[]

}


export default function(state = DEFAULT_STATE, action) {
  if (action.error) {
    action.type = 'HANDLE_ERROR'; // change the type
  }
  switch (action.type) {
    case updateUser:

return {
name:action.payload.data[0].name,
email:action.payload.data[0].email,
password:action.payload.data[0].password,
skill:action.payload.data[0].goal,
steps:action.payload.data[0].steps

}

    case 'HANDLE_ERROR':
      console.log('ERROR OCCURRED IN PROMISE');
      return state;
    default:
      return state;
  }
};
