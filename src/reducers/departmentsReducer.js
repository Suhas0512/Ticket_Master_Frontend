const departmentsInintial=[]

const departmentsReducer=(state=departmentsInintial,action)=>{
    switch(action.type){
        case 'ADD_DEPARTMENT':{
            return[...state,{...action.payload}]
        }
        case 'REMOVE_DEPARTMENT':{
            return state.filter(dept=>dept._id!=action.payload)
        }
        case 'SET_DEPARTMENTS':{
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}
export default departmentsReducer