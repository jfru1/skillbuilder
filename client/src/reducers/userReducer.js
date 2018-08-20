import {UPDATE_USER, CREATE_USER,CREATE_SKILL,CHECK_USER} from '../actions/index';


const DEFAULT_STATE =

{
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
posts:[],
completed:0
}


export default function(state = DEFAULT_STATE, action) {
  if (action.error) {
    action.type = 'HANDLE_ERROR'; // change the type
  }
  switch (action.type) {


    case UPDATE_USER:

console.log('update reducer hit')

    return Object.assign({},state,{

    completed:action.payload.completed

    })










    case CREATE_USER:


  return Object.assign({}, state, {

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
completed:action.payload.completed,

})




case CREATE_SKILL:



return Object.assign({},state,{

  goal:action.payload.goal,
  skill:action.payload.skill,
  step1:action.payload.step1,
  step2:action.payload.step2,
  step3:action.payload.step3,
  step4:action.payload.step4,
  step5:action.payload.step5,

})






case CHECK_USER:



return Object.assign({},state,{

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
  completed:action.payload.completed,

})




    case 'HANDLE_ERROR':
      console.log('ERROR OCCURRED IN PROMISE');
      return state;
    default:
      return state;
  }
};
