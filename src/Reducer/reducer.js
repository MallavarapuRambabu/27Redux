

let initialObj ={
    details:[]
}
export default function reducer(state = initialObj,action){
    console.log(state)
    if(action.type == "Add"){
        return{details:state.details.push(action.payload)}
    }
    return state

 }