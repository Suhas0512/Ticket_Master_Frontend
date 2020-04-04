const ticketsInitial=[]

const ticketsReducer=(state=ticketsInitial,action)=>{
    switch(action.type){
        case 'ADD_TICKETS':{
            return [...state,action.payload]
        }
        case 'SET_TICKETS':{
            return [...action.payload]
        }
        case 'REMOVE_TICKETS':{
            return state.filter(ele=>ele._id!==action.payload)
        }
        default:{
            return [...state]
        }
    }
}
export default ticketsReducer