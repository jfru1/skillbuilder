import {UPDATE_USER} from '../actions/index';
const DEFAULT_STATE = {
createdAt:"",
name:"",
email:"",
password:"",
skill:"",
goal:"",
step1:"",
step2:"",
step3:"",
step4:"",
step5:"",
posts:[]

}


export default function(state = DEFAULT_STATE, action) {
  if (action.error) {
    action.type = 'HANDLE_ERROR'; // change the type
  }
  switch (action.type) {
    case UPDATE_USER:

    console.log(action.payload)

return {
createdAt:action.payload.createdAt,
name:action.payload.name,
email:action.payload.email,
password:action.payload.password,
goal:action.payload.goal,
skill:action.payload.skill,
step1:action.payload.step1,
step2:action.payload.step2,
step3:action.payload.step3,
step4:action.payload.step4,
step5:action.payload.step5,

}


// case ADD_POST:
//
// let newList = [...state.posts];
//
// if(action.payload !==){
//   newList.push({post:`${action.payload}`,completed:false});
//
// }
//
// console.log(action.payload)
//
// return {
// createdAt:action.payload.createdAt,
// name:action.payload.name,
// email:action.payload.email,
// password:action.payload.password,
// goal:action.payload.goal,
// skill:action.payload.skill,
// step1:action.payload.step1,
// step2:action.payload.step2,
// step3:action.payload.step3,
// step4:action.payload.step4,
// step5:action.payload.step5,
// posts:action.payload.
//
// }

    case 'HANDLE_ERROR':
      console.log('ERROR OCCURRED IN PROMISE');
      return state;
    default:
      return state;
  }
};
