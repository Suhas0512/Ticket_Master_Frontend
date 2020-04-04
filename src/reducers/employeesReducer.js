const employeesInintial=[]

const employeesReducer=(state=employeesInintial,action)=>{
    switch(action.type){
        case 'ADD_EMPLOYEES':{
            return [...state,action.payload]
        }
        case 'REMOVE_EMPLOYEES':{
            return state.filter(ele=>ele._id!==action.payload)
        }
        case 'UPDATE_EMPLOYEES':{
            return state.map(ele=>{
                if(ele._id==action.payload._id){
                    return{...ele,...action.payload}
                }else{
                    return {...ele}
                }
            })
        }
        case 'SET_EMPLOYEES':{
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}
export default employeesReducer