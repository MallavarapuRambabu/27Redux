
// import { createStore } from 'redux'
const {createStore} = require('redux')
// import reducer from '../Reducer/reducer'
// const reducer = require("../Reducer/reducer")
let initialObj ={
    details:[],
    education:[]
}
  const store = createStore((state = initialObj,action)=>{
    
    console.log(action.payload)
    if(action.type == "Add"){
        return{...state,details:[...state.details,action.payload]}
    }
    if(action.type == "eduction"){
        return{...state,education:[...state.education,action.payload  ]}
    }
    return state

 })

module.exports={store:store }