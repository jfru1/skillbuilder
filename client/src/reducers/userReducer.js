import {UPDATE_USER} from '../actions/index';
const DEFAULT_STATE = {
name:"",
email:"",
password:"",
skill:"",
goal:"",
step1:"",
step2:"",
step3:"",
step4:"",
step5:""

}


export default function(state = DEFAULT_STATE, action) {
  if (action.error) {
    action.type = 'HANDLE_ERROR'; // change the type
  }
  switch (action.type) {
    case UPDATE_USER:

    console.log(action.payload)

return {
name:action.payload.data.name,
email:action.payload.data.email,
password:action.payload.data.password,
skill:action.payload.data.goal,
step1:action.payload.data.step1,
step2:action.payload.data.step1,
step3:action.payload.data.step1,
step4:action.payload.data.step1,
step5:action.payload.data.step1,



}

    case 'HANDLE_ERROR':
      console.log('ERROR OCCURRED IN PROMISE');
      return state;
    default:
      return state;
  }
};
