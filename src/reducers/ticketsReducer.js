const ticketsInitial=[]

const ticketsReducer=(state=ticketsInitial,action)=>{
    switch(action.type){
        case 'UPDATE_TICKET':{
            return state.map(ticket=>{
                if(ticket._id==action.payload._id){
                    return {...ticket,...action.payload}
                }else{
                    return {...ticket}
                }
            })
        }
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